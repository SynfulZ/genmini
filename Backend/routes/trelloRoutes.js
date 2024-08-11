const express = require('express');
const { createBoard } = require('../controllers/trelloController');
const router = express.Router();

router.post('/create-board', createBoard);

module.exports = router;
