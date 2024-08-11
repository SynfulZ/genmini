const express = require('express');
const { createRepo } = require('../controllers/githubController');
const router = express.Router();

router.post('/create-repo', createRepo);

module.exports = router;
