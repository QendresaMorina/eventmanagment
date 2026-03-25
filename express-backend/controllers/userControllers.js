const database = require('../database');

exports.register = (req, res) => {
    const { username, password } = req.body;

    database.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, password],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Registered' });
        }
    );
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    database.query(
        'SELECT * FROM users WHERE username=? AND password=?',
        [username, password],
        (err, result) => {
            if (err) return res.status(500).json(err);

            if (result.length > 0) {
                res.json({ message: 'Login OK' });
            } else {
                res.status(401).json({ message: 'Wrong credentials' });
            }
        }
    );
};