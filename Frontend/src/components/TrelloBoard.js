import React, { useState } from 'react';
import { createTrelloBoard } from '../services/api';

const TrelloBoard = () => {
  const [boardName, setBoardName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createTrelloBoard(boardName);
      console.log('Trello board created:', response.data);
    } catch (err) {
      console.error('Error creating Trello board:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        placeholder="Board Name"
      />
      <button type="submit">Create Board</button>
    </form>
  );
};

export default TrelloBoard;
