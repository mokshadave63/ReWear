const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();      // Load .env file
connectDB();          // Connect to MongoDB

const app = express();

// Middleware
app.use(express.json());  
app.use(cookieParser());  
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true  
}));

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Routes
app.get('/', (req, res) => res.send('ReWear API is running'));  // Sample route

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
