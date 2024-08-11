import React, { useState } from 'react';
import { createGithubRepo } from '../services/api';

const GithubRepo = () => {
  const [repoName, setRepoName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createGithubRepo(repoName);
      console.log('GitHub repository created:', response.data);
    } catch (err) {
      console.error('Error creating GitHub repository:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        placeholder="Repository Name"
      />
      <button type="submit">Create Repository</button>
    </form>
  );
};

export default GithubRepo;
