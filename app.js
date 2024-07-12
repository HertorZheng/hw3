const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Basic route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do List API!');
});

// Routes
const todosRoute = require('./routes/todos');
app.use('/api/todos', todosRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
