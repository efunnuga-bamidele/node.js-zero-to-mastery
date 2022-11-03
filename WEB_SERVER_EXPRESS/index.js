const express = require('express');
const friendsRouter = require('./routes/friends.route');
const messagesRouter = require('./routes/messages.route');

const app = express();



const PORT = 3000;

//Middleware for monitoring response time
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = (Date.now() - start);
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

//middleware for setting post header to json
app.use(express.json());

//routes modified using the MVC style
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});