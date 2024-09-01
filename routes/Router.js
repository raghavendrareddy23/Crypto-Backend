const express = require('express');
const transactionRoutes = require('./transactionRoutes');
const priceRoutes = require('./priceRoutes');

const router = express.Router();

router.use('/api/transactions', transactionRoutes);
router.use('/api/prices', priceRoutes);

module.exports = router;
