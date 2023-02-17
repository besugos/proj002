const CardService = require('../services/CardService');

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
    return "cardToken";
}