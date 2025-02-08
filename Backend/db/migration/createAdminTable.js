const client = require('../client');

const createAdminTable = async () => {
    const query = `
    CREATE TABLE fitness_admins (
    id SERIAL PRIMARY KEY,
    brand_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    website VARCHAR(255),
    description TEXT,
    address VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

    try{
        await client.query(query);
        console.log('fitness_admins table created');
    }catch(err){
        console.error('Error creating fitness_admins table', err);
    }

}
module.exports = createAdminTable;