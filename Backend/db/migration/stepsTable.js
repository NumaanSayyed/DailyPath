const client = require('../client');

const createStepsTable = async () =>{
    const query = `  
        CREATE TABLE IF NOT EXISTS steps(
        id SERIAL PRIMARY KEY,
        milestone_id INTEGER REFERENCES milestones(id) ON DELETE CASCADE,
        step VARCHAR(255) NOT NULL
        )
    `;

    try{
        await client.query(query);
        console.log('steps table created');
    }catch(err){
        console.error('Error creating steps table', err);
    }
}

module.exports = createStepsTable;