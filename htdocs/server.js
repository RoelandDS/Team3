var express = require('express');
var app = express();

// 2. JSON retour zenden
var teamnaam = {
    name: "FoxPaw Hacking",
    members: [
        { name: "Ben Elen" },
        { name: "Josip Koninckx" }
    ]
};

// 1. Routes voor deze app - ten eerste de Homepage
app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.send(JSON.stringify(teamnaam));
});

app.get('/home', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.send();
});



app.listen(4000);
console.log('Express-server gestart op http://localhost:3000');