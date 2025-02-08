const client = require('../db/client');
const createAdminsTable = require('../db/migration/createAdminTable');
const { checkTableExists } = require('../commonFunction');
const bcrypt = require('bcrypt');

// Controller to handle admin signup requests
const adminSignup = async (req, res) => {
    const {
        brandName,
        email,
        password,
        phone,
        website,
        description,
        address,
    } = req.body;

    try {
        // Validate required fields
        if (!brandName || !email || !password) {
            return res.status(400).json({ message: 'Brand Name, Email, and Password are required!' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if the fitness_admins table exists and create it if not
        const adminsTableExists = await checkTableExists('fitness_admins');
        if (!adminsTableExists) {
            await createAdminsTable();
        }

        // Check if the email already exists
        const emailCheck = await client.query('SELECT * FROM fitness_admins WHERE email = $1', [email]);
        if (emailCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Email is already in use!' });
        }

        // Insert admin data into the database
        const result = await client.query(
            `INSERT INTO fitness_admins 
            (brand_name, email, password, phone, website, description, address) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING id, brand_name, email`,
            [
                brandName,
                email,
                hashedPassword,
                phone,
                website,
                description,
                address,
            ]
        );

        const newAdmin = result.rows[0];

        // Return success response with the newly created admin details
        return res.status(201).json({
            message: 'Admin account created successfully!',
            admin: {
                id: newAdmin.id,
                brandName: newAdmin.brand_name,
                email: newAdmin.email,
            },
        });
    } catch (err) {
        console.error('Admin Signup Error:', err.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { adminSignup };
