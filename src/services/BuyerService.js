const Buyer = require("../models/BuyerModel");

module.exports = {
    findByCpf: async (cpf) => {
        return await Buyer.findAll({
            where: {
                cpf: cpf
            }
        });
    },
    create: async (body) => {
        let id = await Buyer.create(body);
        return id.dataValues.id;
    }
};