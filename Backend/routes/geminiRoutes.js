const express = require('express');
const { getWorkflow } = require('../controllers/geminiController');
const router = express.Router();

router.post('/generate-workflow', getWorkflow);

module.exports = router;
