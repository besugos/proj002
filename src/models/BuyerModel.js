const Sequelize = require('sequelize');
const db = require('./db');

const Buyer = db.define('buyer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'buyer'
});

// Buyer.sync({ alter: true });

module.exports = Buyer;

