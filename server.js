const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows your React frontend to talk to this server
app.use(express.json()); // Allows the server to read JSON data

// Simple Test Route
app.get('/', (req, res) => {
  res.send('Food Spot Locator Server is Running!');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});