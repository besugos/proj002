const CardService = require('../services/CardService');
const jwt = require('jsonwebtoken');

module.exports = {
    create: async (body) => {
        if (validateCard(body)) {
            let cardBody = cardMapper(body);
            let card_id = await CardService.create(cardBody);
            return card_id;
        } else {
            throw new Error('Invalid card number');
        }

    }
}

function validateCard(body) {
    return (body.number.length === 16);
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