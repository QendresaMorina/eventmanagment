const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const eventRoutes = require('./routes/event');
const userRoutes = require('./routes/users');

app.use('/api/event', eventRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});