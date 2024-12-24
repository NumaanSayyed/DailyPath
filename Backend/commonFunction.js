const client = require('./db/client');

// Function to check if the table exists
const checkTableExists = async (tableName) => {
    const query = `
        SELECT EXISTS (
            SELECT FROM pg_tables
            WHERE schemaname = 'public' AND tablename = $1
        );
    `;
    const result = await client.query(query, [tableName]);
    return result.rows[0].exists;
};

module.exports = { checkTableExists };