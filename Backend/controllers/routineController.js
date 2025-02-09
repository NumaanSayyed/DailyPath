const client = require('../db/client'); // Import the DB connection
const { checkTableExists } = require('../commonFunction');
const routines = require('../db/migration/routinesTable');
const createMilestonesTable = require('../db/migration/milestonesTable');
const createStepsTable = require('../db/migration/stepsTable');

const addRoutine = async (req, res) => {
    const { routineName, routineType, duration, milestones, steps, routineDescription } = req.body;

    // Ensure 'steps' is an array or default to an empty array
    const stepsArray = Array.isArray(steps) ? steps : [];

    try {
        // Check if the routines table exists
        const routinesTable = await checkTableExists('routines');
        const milestonesTable = await checkTableExists('milestones');
        const stepsTable = await checkTableExists('steps');

        if (!routinesTable) {
            await routines();
        }

        if (!milestonesTable) {
            await createMilestonesTable();
        }

        if (!stepsTable) {
            await createStepsTable();
        }

        // Insert the routine into the routines table
        const routineResult = await client.query(
            'INSERT INTO routines (routine_name, routine_type, duration, routinedescription) VALUES ($1, $2, $3, $4) RETURNING id',
            [routineName, routineType, duration, routineDescription]
        );

        const routineId = routineResult.rows[0].id;

        // Insert the milestones into the milestones table
        for (let milestone of milestones) {
            const milestoneResult = await client.query(
                'INSERT INTO milestones (routine_id, milestone) VALUES ($1, $2) RETURNING id',
                [routineId, milestone]
            );

            const milestoneId = milestoneResult.rows[0].id;

            // Insert the steps for each milestone into the steps table
            for (let step of stepsArray) {
                await client.query(
                    'INSERT INTO steps (milestone_id, step) VALUES ($1, $2)',
                    [milestoneId, step]
                );
            }
        }

        res.status(201).json({ message: 'Routine added successfully!' });
    } catch (error) {
        console.error('Error adding routine:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};




// Controller to handle fetching routines
const getRoutines = async (req, res) => {
    try {
        // Query to fetch routines with their milestones and steps
        const result = await client.query(`
            SELECT 
                r.id AS routine_id, 
                r.routine_name, 
                r.routine_type, 
                r.duration, 
                r.routinedescription,  -- Ensure correct column name here
                m.id AS milestone_id, 
                m.milestone, 
                s.id AS step_id, 
                s.step
            FROM 
                routines r
            LEFT JOIN 
                milestones m ON r.id = m.routine_id
            LEFT JOIN 
                steps s ON m.id = s.milestone_id
            ORDER BY 
                r.id, m.id, s.id;
        `);

        // Transform the data into a structured JSON format
        const routines = {};
        result.rows.forEach(row => {
            const {
                routine_id, routine_name, routine_type, duration, routinedescription,
                milestone_id, milestone, step_id, step
            } = row;

            if (!routines[routine_id]) {
                routines[routine_id] = {
                    id: routine_id,
                    name: routine_name,
                    type: routine_type,
                    duration,
                    description: routinedescription,  // Ensure correct column used here
                    milestones: {}
                };
            }

            if (milestone_id && !routines[routine_id].milestones[milestone_id]) {
                routines[routine_id].milestones[milestone_id] = {
                    id: milestone_id,
                    name: milestone,
                    steps: []
                };
            }

            if (step_id) {
                routines[routine_id].milestones[milestone_id].steps.push({
                    id: step_id,
                    name: step
                });
            }
        });

        // Convert routines object into an array
        const routinesArray = Object.values(routines).map(routine => ({
            ...routine,
            milestones: Object.values(routine.milestones)
        }));

        res.status(200).json(routinesArray);
    } catch (error) {
        console.error('Error fetching routines:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Controller to get specific routine
const getRoutine = async (req, res) => {
    const { id } = req.params;  // Destructure 'id' from the request parameters
    if (!id) {
        return res.status(400).json({ error: "Routine ID is required" });
    }

    try {
        // Query to fetch routine, milestones, and steps
        const query = `
            SELECT 
                r.id AS routine_id, 
                r.routine_name, 
                r.routine_type, 
                r.duration, 
                r.routinedescription,
                m.id AS milestone_id, 
                m.milestone, 
                s.id AS step_id, 
                s.step
            FROM routines r
            LEFT JOIN milestones m ON r.id = m.routine_id
            LEFT JOIN steps s ON m.id = s.milestone_id
            WHERE r.id = $1
            ORDER BY m.id, s.id;
        `;

        // Execute the query with the routine ID from the request parameters
        const result = await client.query(query, [id]);

        // Check if any data was returned
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Routine not found" });
        }

        // Structure the data to return
        const routineData = {
            id: result.rows[0].routine_id,
            name: result.rows[0].routine_name,
            type: result.rows[0].routine_type,
            duration: result.rows[0].duration,
            description: result.rows[0].routinedescription,
            milestones: [],
        };

        const milestonesMap = new Map();

        result.rows.forEach(row => {
            // Add milestones if not already added
            if (row.milestone_id && !milestonesMap.has(row.milestone_id)) {
                milestonesMap.set(row.milestone_id, {
                    id: row.milestone_id,
                    name: row.milestone,
                    steps: [],
                });
                routineData.milestones.push(milestonesMap.get(row.milestone_id));
            }

            // Add steps to the corresponding milestone
            if (row.step_id) {
                milestonesMap.get(row.milestone_id).steps.push({
                    id: row.step_id,
                    name: row.step,
                });
            }
        });

        // Send back the structured routine data
        res.json(routineData);
    } catch (error) {
        console.error("Error fetching routine details:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};




module.exports = { addRoutine , getRoutines, getRoutine };
