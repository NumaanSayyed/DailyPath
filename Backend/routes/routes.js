// routes/routes.js
const express = require('express');
const router = express.Router();
const { addRoutine, getRoutines, getRoutine } = require('../controllers/routineController');
const { signup } = require('../controllers/signupController');
const { login } = require('../controllers/loginController');
const { adminSignup } = require('../controllers/adminSignupController');

// POST route to add a new routine
router.post('/routine', addRoutine);

// GET route to fetch all routines
router.get('/get_routines', getRoutines);

// GET route to fetch a specific routine by id (Added this route)
router.get('/get_routine/:id', getRoutine);

// Additional routes for signup, login, etc.
router.post('/signup', signup);
router.post('/login', login);
router.post('/admin/signup', adminSignup);

module.exports = router;
