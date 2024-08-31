const express = require('express');
const { fetchAndStoreTransactions } = require('../controllers/transactionController');

const transactionRoutes = express.Router();

transactionRoutes.get('/', fetchAndStoreTransactions);

module.exports = transactionRoutes;
