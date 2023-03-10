const Payment = require("../models/PaymentModel");

module.exports = {
    list: async () => {
        return await Payment.findAll();
    },
    pick: async (id) => {
        return (await Payment.findAll({
            where: {
                id: id
            }
        }))[0];
    },
    create: async (body) => {
        await Payment.create(body);
    }
};