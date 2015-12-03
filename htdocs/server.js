var express = require('express');
var mysql = require('mysql');
var app = express();

// JSON retour zenden
var teamnaam = {
    name: "FoxPaw Hacking",
    members: [
        {name: "Ben Elen"},
        {name: "Josip Koninckx"}
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

app.get('/qr', function (req, res) {
	var connection = mysql.createConnection({
		host: '173.194.105.180',
		port: '3306',
		user: 'student',
		password: 'mulestudent',
		database: 'training'
	});
    connection.connect();

    connection.query('SELECT * from qr_code WHERE img_title LIKE "%FoxPaw Hacking%"', function (err, rows, fields) {
        if (!err & rows.length > 0)
            res.json(rows[0]);
        else {
            res.status(404);
            res.send({ error: 'Not found' });
        }
    });

    connection.end();
});

app.listen(4000);