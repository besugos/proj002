const PaymentService = require('../services/PaymentService');

module.exports = {
    listAll: async (req, res) => {
        let response = {error: '', result: []};
        let payments = await PaymentService.listAll();

        for (let i in payments) {
            response.result.push({
                id: payments[i].id,
                amount: payments[i].amount,
                type: payments[i].type,
                status: payments[i].status,
                buyer_id: payments[i].buyer_id,
                card_id: payments[i].card_id
            })
        }
        res.json(response);
    },

    listOne: async (req, res) => {
        let response = {error: '', result: {}};
        let id = req.params.id;
        let payment = await PaymentService.listOne(id);

        if (payment) {
            response.result = payment;
        }

        res.json(response);
    }

}