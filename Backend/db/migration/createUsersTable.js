const client = require('../client');

const createUsersTable = async () => {
      const query = `
      CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      phone VARCHAR(15),
      company VARCHAR(100),
      interests JSON DEFAULT '[]' -- Store interests as a JSON array
)`;
      try {
            await client.query(query);
            console.log('users table created');
      } catch (err) {
            console.error("Error creating users table", err);
      }
}

module.exports = createUsersTable;
