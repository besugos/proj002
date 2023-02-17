const Card = require("../models/CardModel");

module.exports = {
    create: async (body) => {
        let id = await Card.create(body);
        return id.dataValues.id;
    }
};