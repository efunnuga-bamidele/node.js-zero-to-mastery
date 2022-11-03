function getMessages(req, res){ 
    res.send('Getting the messages.....')
}

function postMessages(req, res){ 
    res.send('Updating the messages.....')
}

module.exports = {
    getMessages: getMessages,
    postMessages: postMessages
}