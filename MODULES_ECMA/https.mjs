// const request = require('./request');
// const response = require('./response');

//Destructuring Approach
//Using ECMAScript
import { send } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
    // request.send(url, data)
    // return response.read();
    send(url, data)
    return read();
}


const resData = makeRequest("http://www.google.com", 'hello')

console.log(resData)