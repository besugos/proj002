const Sequelize = require('sequelize');
const db = require('./db');

const Payment = db.define('payment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    buyer_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    card_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    freezeTableName: true,
    tableName: 'payment'
});

// Payment.sync({ alter: true });

module.exports = Payment;

