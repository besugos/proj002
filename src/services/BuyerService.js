const Buyer = require("../models/BuyerModel");

module.exports = {
    findByCpf: async (cpf) => {
        return await Buyer.findAll({
            where: {
                cpf: cpf
            }
        });
    },
    findById: async (id) => {
        return (await Buyer.findAll({
            where: {
                id: id
            }
        }))[0];
    },
    create: async (body) => {
        let id = await Buyer.create(body);
        return id.dataValues.id;
    }
};