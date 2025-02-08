const client = require('../db/client');
const createUsersTable = require('../db/migration/createUsersTable');
const { checkTableExists } = require('../commonFunction');
const bcrypt = require('bcrypt');

// Controller to handle signup requests
const signup = async (req, res) => {
    const { email, password, firstName, lastName, phone, company, interests } = req.body;

    try {
        // Validate required fields
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if the users table exists and create it if not
        const usersTableExists = await checkTableExists('users');
        if (!usersTableExists) {
            await createUsersTable();
        }

        // Check if the email already exists
        const emailCheck = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (emailCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Email is already in use!' });
        }

        // Insert user data into the database
        const result = await client.query(
            `INSERT INTO users 
            (email, password, first_name, last_name, phone, company, interests, is_admin) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
            RETURNING id, email, first_name, last_name`,
            [
                email,
                hashedPassword,
                firstName,
                lastName,
                phone,
                company,
                JSON.stringify(interests || []),
                false,
            ]
        );

        const newUser = result.rows[0];



        return res.status(201).json({
            message: 'User created successfully!',
            user: {
                id: newUser.id,
                email: newUser.email,
                firstName: newUser.first_name,
                lastName: newUser.last_name,
            }
        });
    } catch (err) {
        console.error('Signup Error:', err.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { signup };
