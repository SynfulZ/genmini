// ...existing imports and functions

// Trello
export const createTrelloBoard = (boardName) => API.post('/trello/create-board', { boardName });

// GitHub
export const createGithubRepo = (repoName) => API.post('/github/create-repo', { repoName });

// Gemini
export const generateWorkflow = (projectSummary) => API.post('/gemini/generate-workflow', { projectSummary });
