const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);


const trelloRoutes = require('./routes/trelloRoutes');

app.use('/api/trello', trelloRoutes);


const geminiRoutes = require('./routes/geminiRoutes');

app.use('/api/gemini', geminiRoutes);
