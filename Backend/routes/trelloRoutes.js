// routes/trelloRoutes.js

const express = require('express');
const trelloController = require('../controllers/trelloController');

const router = express.Router();

// Define the route for creating a Trello board
router.post('/create-board', trelloController.createBoard);

// Export the router
module.exports = router;
