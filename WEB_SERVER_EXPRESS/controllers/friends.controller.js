const model = require('../models/friends.model')


function getFriends(req, res){
    // res.send('Hello World!');
    // res.send(model);
    res.json(model);
}

function getFriend(req, res){
    // res.send('<ul><li>Hello Albert!</li></ul>');
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend){
        //optimized res code 
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
}

function postFriend(req, res) {
    if (!req.body.name){
        app.status(400).json({
            error: "Missing friend name"
        });
    }else{
        const newFriend = {
            name: req.body.name,
            id: model.length
        }
        model.push(newFriend);
        res.json(model);
    }
}


module.exports = {
    getFriend,
    getFriends,
    postFriend
}


