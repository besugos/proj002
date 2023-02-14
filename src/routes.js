const express = require('express');
const router = express.Router();

const PaymentController = require('./controllers/PaymentController');

router.get('/payments', PaymentController.listAll);

router.get('/payment/:id', PaymentController.listOne);

module.exports = router;

