// config/trello.js

const axios = require('axios');

const trello = axios.create({
  baseURL: 'https://api.trello.com',
  params: {
    key: process.env.TRELLO_API_KEY, // Your Trello API key
    token: process.env.TRELLO_API_TOKEN, // Your Trello API token
  },
});

module.exports = trello;
