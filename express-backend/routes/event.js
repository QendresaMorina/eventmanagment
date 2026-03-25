const express = require('express');
const router = express.Router();

const { getEvents, addEvent } = require('../controllers/eventControllers');

router.get('/', getEvents);
router.post('/', addEvent);

module.exports = router;