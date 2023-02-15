const PaymentService = require('../services/PaymentService');

module.exports = {
    listAll: async (req, res) => {
        let payments = await PaymentService.list();
        res.json(payments);
    },

    listOne: async (req, res) => {
        let id = req.params.id;
        let payment = await PaymentService.pick(id);
        res.json(payment);
    },

    create: async (req, res) => {
        console.log(req.body);
        await PaymentService.create(req.body)
            .then(() => {
                return res.json({"result": "created successfully"});
            }).catch(() => {
                return res.status(400).json({"result": "Error on creation"});
            })
    }
}