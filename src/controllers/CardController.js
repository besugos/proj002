const CardService = require('../services/CardService');
const jwt = require('jsonwebtoken');

module.exports = {
    create: async (body) => {
        let cardBody = cardMapper(body);
        let card_id = await CardService.create(cardBody);
        console.log(card_id);
        return card_id;
    }
}

function cardMapper(body) {
    return {
        token: generateToken(body)
    }
}

function generateToken(body) {
    let payload = {
        holder: body.holder,
        number: body.number,
        expiration: body.expiration,
        cvc: body.cvc
    }
    return jwt.sign(payload, process.env.SECRET);
}