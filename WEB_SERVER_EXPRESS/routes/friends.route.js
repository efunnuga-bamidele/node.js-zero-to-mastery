const express = require('express');

const friendsRouter = express.Router();
const friendsController = require('../controllers/friends.controller');



// app.post('/friends', friendsController.postFriend); //Old route method using app

//create middleware
friendsRouter.use((req, res, next) => {
    console.log('ip address: ', req.ip);
    next();
});

friendsRouter.post('/', friendsController.postFriend);

friendsRouter.get('/', friendsController.getFriends);

friendsRouter.get('//:friendId', friendsController.getFriend);




module.exports = friendsRouter;