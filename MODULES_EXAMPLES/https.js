// const request = require('./request');
// const response = require('./response');

//Destructuring Approach

const { send } = require('./internals/request');
const { read } = require('./internals/response');

function makeRequest(url, data) {
    // request.send(url, data)
    // return response.read();
    send(url, data)
    return read();
}


const resData = makeRequest("http://www.google.com", 'hello')

console.log(resData)