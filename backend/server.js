const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();      // Load .env file
connectDB();          // Connect to MongoDB

const app = express();
app.use(express.json());  // To accept JSON requests

// Sample route
app.get('/', (req, res) => res.send('ReWear API is running'));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
