// controllers/trelloController.js

const trello = require('../config/trello');

exports.createBoard = async (req, res) => {
  const { boardName } = req.body;
  try {
    const board = await trello.post('/1/boards/', { name: boardName });
    res.status(201).json(board);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


