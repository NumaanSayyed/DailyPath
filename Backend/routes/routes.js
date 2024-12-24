const express = require('express');
const router = express.Router();
const { addRoutine} = require('../controllers/routineController');
const { getRoutines } = require('../controllers/routineController');
const {signup} = require('../controllers/signupController');

// POST route to add a new routine
router.post('/routine', addRoutine);
router.get('/get_routines', getRoutines);
router.post('/signup', signup);

module.exports = router;
