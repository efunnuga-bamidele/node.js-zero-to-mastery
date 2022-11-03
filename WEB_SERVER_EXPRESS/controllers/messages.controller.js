const path = require('path');

// path.join(__dirname, '..', 'public', 'books.jpg')

function getMessages(req, res){ 
    // res.send('Getting the messages.....')

    //to send files
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'books.jpg'));
    res.render('messages', {
        title:"Messages to my Friends!",
        friend:"Elon Musk"
    })

}

function postMessages(req, res){ 
    res.send('Updating the messages.....')
}

module.exports = {
    getMessages: getMessages,
    postMessages: postMessages
}