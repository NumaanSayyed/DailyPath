const client = require('../db/client'); // Import the DB connection
const createUsersTable = require('../db/migration/createUsersTable');
const { checkTableExists } = require('../commonFunction');
const bcrypt = require('bcrypt');

// Controller to handle signup requests
const signup = async (req, res) => {
    const { email, password, firstName, lastName, phone, company, interests } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Check if the users table exists and create it if not
        const usersTableExists = await checkTableExists('users');
        if (!usersTableExists) {
            await createUsersTable();
        }

        // Check if the email already exists
        const emailCheck = await client.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        if (emailCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Email already in use!' });
        }

        // Insert user data with interests into the database
        const result = await client.query(
            `INSERT INTO users 
            (email, password, first_name, last_name, phone, company, interests) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING id`,
            [email, hashedPassword, firstName, lastName, phone, company, JSON.stringify(interests)]
        );

        // Send success message
        res.status(200).json({
            message: 'User Created Successfully',
            userId: result.rows[0].id,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { signup };
