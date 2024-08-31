require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const router = require('./routes/Router')

const app = express();
app.use(express.json());

app.use(router);
connectDB();



// Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
