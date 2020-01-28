var express = require('express');
var app = express();
app.get('/n', function (req, res) {
    res.send('Hello from Docker\n');
});

app.listen(3000);
console.log('Running on port :3000')