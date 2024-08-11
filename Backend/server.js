const express = require('express');
const cors = require('cors');
const trelloRoutes = require('./routes/trelloRoutes');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Your existing middleware and routes
app.use(express.json());
app.use('/api/trello', trelloRoutes);
app.use('/api/github', require('./routes/githubRoutes'));
app.use('/api/gemini', require('./routes/geminiRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});


