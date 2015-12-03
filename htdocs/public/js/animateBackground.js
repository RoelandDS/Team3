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
