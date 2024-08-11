import React from 'react';
import TrelloBoard from './components/TrelloBoard';
import GithubRepo from './components/GithubRepo';
import WorkflowGenerator from './components/WorkflowGenerator';

const App = () => {
  return (
    <div>
      <h1>Collaborative Platform</h1>
      <TrelloBoard />
      <GithubRepo />
      <WorkflowGenerator />
    </div>
  );
};

export default App;
