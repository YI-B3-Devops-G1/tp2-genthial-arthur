'use strict';

var express = require('express');
var postgres = require('postgres');
var redis = require('redis');
const { promisify } = require('util');

var port = 3000;
var app = express();

const client = redis.createClient(6379, 'redis');

const clientAsync = promisify(client.CLIENT).bind(client);



app.get('/',(req,res) => {
    res.json({message : "David le bg de la night", method : req.method});
});

app.get('/status', async(req,res) => {
    const clientList = await clientAsync('list');
    res.json({
        status:"ok",
        postgresUptime:String,
        redisConnectClient:`${clientList.split('\n').length - 1}`
    })
});

app.listen(port);

console.log('Running on port :'+ port );