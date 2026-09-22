const express = require('express');
const userRoutes = require('../routes/userRoutes');
const articleRoutes = require('../routes/articleRoutes');

const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Get root route');
});

// Routes
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
