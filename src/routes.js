const express = require('express');
const router = express.Router();
const Payment = require('./models/PaymentModel');

const PaymentController = require('./controllers/PaymentController');


router.get('/', (req, res) => {
    res.render('index', {
        subject: 'hbs template engine',
        name: 'our template',
        link: 'https://google.com'
    });
})

router.get('/cadastro', (req, res) => {
    res.render('cadastro', {
        subject: 'hbs template engine',
        name: 'our template',
        link: 'https://google.com'
    });
});

router.get('/detalhes/:id', (req, res) => {
    res.render('detalhes', {
        subject: 'hbs template engine',
        name: 'our template',
        link: 'https://google.com'
    });
});

router.get('/payments', PaymentController.listAll);

router.get('/payment/:id', PaymentController.listOne);

router.post('/create', PaymentController.create);

module.exports = router;

