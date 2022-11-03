const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.route');
const messagesRouter = require('./routes/messages.route');

const app = express();

//using template engines (hbs)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

//Middleware for monitoring response time
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = (Date.now() - start);
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

//used to serve frontend with data
app.use('/site', express.static(path.join(__dirname, 'public')));
// app.use('/', express.static(path.join(__dirname, 'build')));
//middleware for setting post header to json
app.use(express.json());

//routes modified using the MVC style
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Friends Are Very Clever',
        caption: "Let's go skiing"
    })
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});