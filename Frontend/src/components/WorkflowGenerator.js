import React, { useState } from 'react';
import { generateWorkflow } from '../services/api';

const WorkflowGenerator = () => {
  const [projectSummary, setProjectSummary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await generateWorkflow(projectSummary);
      console.log('Generated workflow:', response.data);
    } catch (err) {
      console.error('Error generating workflow:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={projectSummary}
        onChange={(e) => setProjectSummary(e.target.value)}
        placeholder="Project Summary"
      />
      <button type="submit">Generate Workflow</button>
    </form>
  );
};

export default WorkflowGenerator;
