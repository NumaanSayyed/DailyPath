const client = require('../client');

const createRoutinesTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS routines (
            id SERIAL PRIMARY KEY,
            routine_name VARCHAR(255) NOT NULL,
            routine_type VARCHAR(255) NOT NULL,
            duration INTEGER NOT NULL,
            routineDescription TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        await client.query(query);
        console.log('routines table created');
    } catch (err) {
        console.error("Error creating routines table", err);
    }
};

module.exports = createRoutinesTable;
