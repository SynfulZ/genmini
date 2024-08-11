const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const geminiAPI = axios.create({
  baseURL: 'https://api.gemini.com/v1', // replace with actual base URL
  headers: {
    Authorization: `Bearer ${process.env.GEMINI_API_TOKEN}`,
  },
});

module.exports = geminiAPI;
