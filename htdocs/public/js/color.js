/* 
 * FoxPaw Entertainment proprietary code.
 */
var windowX;
var windowY;

$(document).ready(initFunction);

function initFunction() {
    windowResizer();
    $('#body').mousemove(function (event) {
        mouseTracker(event);
    });
    $(window).resize(function (event) {
        windowResizer(event);
    });
}

function windowResizer(event) {
    windowX = $(window).width();
    windowY = $(window).height();
}

function mouseTracker(event) {
    var relMoveX = event.clientX / windowX;
    var relMoveY = event.clientY / windowY;

    var offset = (relMoveX * 100) + "% " + (relMoveY * 0) + "%";
    $("#body").css({backgroundPosition: offset});
}

var hue = jsHue();
var ip = "10.0.1.3";
var bridge = hue.bridge(ip);



/*
 hue.discover(
 function (bridges) {
 if (bridges.length === 0) {
 console.log('No bridges found. :(');
 }
 else {
 bridges.forEach(function (b) {
 console.log('Bridge found at IP address %s.', b.internalipaddress);
 bridge = b;
 });
 }
 },
 function (error) {
 console.error(error.message);
 }
 );
 */

/*
 // create user account (requires link button to be pressed)
 bridge.createUser('test', function (data) {
 // extract bridge-generated username from returned data
 var username = data[0].success.username;
 
 console.log('New username:', username);
 
 // instantiate user object with username
 user = bridge.user(username);
 });
 
 $.get(connString, function (data, status) {
 returnedData = data;
 alert("Data: " + data.toString() + "\nStatus: " + status);
 ourLamp = returnedData[ourLampId];
 }, "json");
 */

var username = "33bf4d2254c66f7e94dcee2924a923";
var user = bridge.user(username);
var connString = "http://" + ip + "/api/" + username + "/lights";
var ourLampId = 8;

function turnOff() {
    var connString = "http://" + ip + "/api/" + username + "/lights/" + ourLampId + "/state";
    $.ajax(connString, {
        'data': '{"on":false}',
        'type': 'PUT',
        'processData': false,
        'contentType': 'application/json'
    });
}

function turnOn() {
    var connString = "http://" + ip + "/api/" + username + "/lights/" + ourLampId + "/state";
    $.ajax(connString, {
        'data': '{"on":true}',
        'type': 'PUT',
        'processData': false,
        'contentType': 'application/json'
    });
}

function setHue(hue, sat, bri) {
    var connString = "http://" + ip + "/api/" + username + "/lights/" + ourLampId + "/state";

    $.ajax(connString, {
        'data': '{"on":true, "sat":' + sat + ', "bri":' + bri + ',"hue":' + hue + '}',
        'type': 'PUT',
        'processData': false,
        'contentType': 'application/json'
    });
}


// MINHUE: 0
// MAXHUE: 65280
// MINSAT: 25
// MAXSAT: 200
// MINBRI: 0
// MAXBRI: 254
function turnRed() {
    setHue(0, 200, 254);
}

function turnYellow() {
    setHue(12750, 200, 254);
}

function turnBlue() {
    setHue(46920, 200, 254);
}

function turnGreen() {
    setHue(25500, 200, 254);
}

turnRed();