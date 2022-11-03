const express = require('express');

const messagesRoute = express.Router();
const messagesController = require('../controllers/messages.controller');


messagesRoute.get('/', messagesController.getMessages);

messagesRoute.post('/', messagesController.postMessages);


module.exports = messagesRoute;