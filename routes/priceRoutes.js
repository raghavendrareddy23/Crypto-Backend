const express = require('express');
const priceRoutes = express.Router();
const { getTotalExpenses } = require('../controllers/priceController');

priceRoutes.get('/expenses', getTotalExpenses);

module.exports = priceRoutes;
