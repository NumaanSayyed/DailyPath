const client = require('./db/client'); // Import the DB connection
const createUsersTable = require('./migration/createUsersTable'); // Correct file path

const runMigration = async () => {
    try {
        await client.connect(); // Ensure DB client is connected
        console.log('Database connected.');

        await createUsersTable(); // Run migration to create users table
        console.log('Migration completed successfully.');

    } catch (err) {
        console.error('Error during migration:', err);
    } finally {
        await client.end(); // Close the DB connection after migration
        console.log('Database connection closed.');
    }
};

runMigration();
