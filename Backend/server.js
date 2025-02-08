const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routineRoutes = require('./routes/routes');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON body
app.use(express.json());



// Enable CORS
app.use(cors());

// Use the routine routes
app.use('/api', routineRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
