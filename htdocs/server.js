var express = require('express');
var app = express();

// JSON retour zenden
var teamnaam = {
    name: "FoxPaw Hacking",
    members: [
        { name: "Ben Elen" },
        { name: "Josip Koninckx" }
    ]
};


app.use(express.static(__dirname));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes voor deze app - ten eerste de JSON
app.get('/', function (req, res) {
    res.json(teamnaam);
});



app.listen(4000);