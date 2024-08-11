const octokit = require('../config/github');

exports.createRepo = async (req, res) => {
  const { repoName } = req.body;
  try {
    const repo = await octokit.repos.createForAuthenticatedUser({
      name: repoName,
    });
    res.status(201).json(repo.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
