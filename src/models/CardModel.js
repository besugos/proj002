const Sequelize = require('sequelize');
const db = require('./db');

const Card = db.define('card', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'card'
});

// Card.sync({ alter: true });

module.exports = Card;

