const express = require('express');
const transactionRoutes = require('./transactionRoutes');

const router = express.Router();

router.use('/api/transactions', transactionRoutes);

module.exports = router;
