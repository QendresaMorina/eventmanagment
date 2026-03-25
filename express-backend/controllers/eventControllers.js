const database = require('../database');

exports.getEvents = (req, res) => {
    database.query('SELECT * FROM events', (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.addEvent = (req, res) => {
    const { title, date } = req.body;

    database.query(
        'INSERT INTO events (title, date) VALUES (?, ?)',
        [title, date],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Event added' });
        }
    );
};