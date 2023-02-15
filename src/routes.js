const express = require('express');
const router = express.Router();
const Payment = require('./models/PaymentModel');

const PaymentController = require('./controllers/PaymentController');

router.get('/payments', PaymentController.listAll);

router.get('/payment/:id', PaymentController.listOne);

router.post('/create', PaymentController.create);

module.exports = router;

