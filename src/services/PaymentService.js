const db = require('../db')

module.exports = {
    listAll: () => {
        return new Promise((acc, rej) => {
            db.query('SELECT * FROM payment', (error, results) => {
                if (error) {
                    rej(error);
                    return;
                }
                acc(results);
            });
        });
    },
    listOne: (id) => {
        return new Promise((acc, rej) => {
            db.query('SELECT * FROM payment WHERE payment.id = ?', [id], (error, results)=> {
                if (error) {
                    rej(error);
                    return;
                }
                if (results.length > 0) {
                    acc(results[0]);
                } else {
                    acc(false);
                }
            })
        })
    }
};