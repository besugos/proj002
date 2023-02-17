const BuyerService = require('../services/BuyerService');

module.exports = {
    create: async (body) => {
        let existingBuyer = await BuyerService.findByCpf(body.cpf);
        if (existingBuyer.length > 0) {
            return existingBuyer[0].id;
        } else {
            let buyerBody = buyerMapper(body);
            let buyer_id = await BuyerService.create(buyerBody);
            console.log(buyer_id);
            return buyer_id;
        }
    }
}

function buyerMapper(body) {
    return {
        name: body.name,
        email: body.email,
        cpf: body.cpf
    }
}