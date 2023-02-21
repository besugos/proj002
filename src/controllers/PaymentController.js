const PaymentService = require('../services/PaymentService');
const BuyerController = require('./BuyerController');
const CardController = require('./CardController');

module.exports = {
    listAll: async (req, res) => {
        let payments = await PaymentService.list();
        res.json(payments);
    },

    listOne: async (req, res) => {
        let id = req.params.id;
        let payment = await PaymentService.pick(id);
        if (payment) {
            let buyer = await BuyerController.getBuyerById(payment.buyer_id);
            console.log(buyer.dataValues);
            payment.dataValues.buyer = buyer.dataValues;
        }
        res.json(payment);
    },

    create: async (req, res) => {
        console.log(req.body);
        let buyer_id = await BuyerController.create(req.body);
        let card_id, invoice_id = null;
        if (req.body.type === 'card') {
            try {
                card_id = await CardController.create(req.body);
            } catch {
                return res.status(400).json({"result": "Error on creation - invalid card"});
            }
        } else {
            invoice_id = Math.floor(Math.random() * 999999 + 1)
        }
        let body = paymentMapper(req.body, buyer_id, card_id);
        let response = {"result": "created successfully"};
        if (invoice_id) {
            response.invoice_id = invoice_id;
        }
        await PaymentService.create(body)
            .then(() => {
                return res.json(response);
            }).catch(() => {
                return res.status(400).json({"result": "Error on creation"});
            })
    }
}

function paymentMapper(body, buyer_id, card_id) {
    return {
        amount: body.amount,
        type: body.type,
        status: body.type === 'card' ? 'paid' : 'pending',
        buyer_id: buyer_id,
        card_id: card_id
    }
}