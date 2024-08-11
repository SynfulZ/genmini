const Trello = require('node-trello');
const dotenv = require('dotenv');

dotenv.config();

const trello = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN);

module.exports = trello;
