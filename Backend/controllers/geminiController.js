const geminiAPI = require('../config/gemini');

exports.getWorkflow = async (req, res) => {
  const { projectSummary } = req.body;
  try {
    const response = await geminiAPI.post('/workflow/generate', { summary: projectSummary });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
