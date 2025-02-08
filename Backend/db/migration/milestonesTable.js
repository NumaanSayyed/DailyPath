const client = require('../client');

const createMilestonesTable = async () => {
    const query = `
            CREATE TABLE IF NOT EXISTS milestones(
            id SERIAL PRIMARY KEY,
            routine_id INTEGER REFERENCES routines(id) ON DELETE CASCADE,
            milestone VARCHAR(255) NOT NULL
            )
        `;

    try {
        await client.query(query);
        console.log('milestones table created');
    } catch (err) {
        console.error("Error creating milestones table", err);
    }

};

module.exports = createMilestonesTable;