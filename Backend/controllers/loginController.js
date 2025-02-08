const client = require('../db/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required!' });
        }

        let user;
        let isAdmin = false;

        // Check if the email belongs to an admin
        const adminQuery = await client.query('SELECT * FROM fitness_admins WHERE email = $1', [email]);
        if (adminQuery.rows.length > 0) {
            user = adminQuery.rows[0];
            isAdmin = true;
        } else {
            // Check if the email belongs to a normal user
            const userQuery = await client.query('SELECT * FROM users WHERE email = $1', [email]);
            if (userQuery.rows.length === 0) {
                return res.status(404).json({ message: 'User not found!' });
            }
            user = userQuery.rows[0];
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password!' });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user.id, email: user.email, role: isAdmin ? 'admin' : 'user' },
            process.env.JWT_SECRET,
            { expiresIn: '7d' } // Token valid for 7 days
        );

        // Prepare response
        const response = {
            message: 'Login successful!',
            token,
            name: user.name || `${user.first_name} ${user.last_name}`, // Use appropriate name field
            isAdmin,
        };

        // Include brand name for admins
        if (isAdmin) {
            response.brandName = user.brand_name;
        }

        return res.status(200).json(response);
    } catch (err) {
        console.error('Login Error:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { login };
