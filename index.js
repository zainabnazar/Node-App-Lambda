const serverless = require('serverless-http');
const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('You successfully called your first Lambda function!')
    console.log('successful:', res.status);
})
module.exports.handler = serverless(app);