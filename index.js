'use strict';

var express = require('express');
var port = 3000;
var app = express();



app.get('/',(req,res) => {
    res.json({message : "David le bg de la night", method : req.method});
});
app.get('/status', (req,res) => {
    res.json({
        status:"ok",
        postgresUptime:String,
        redisConnectClient:Number
    })
});

app.listen(port);

console.log('Running on port :'+ port );