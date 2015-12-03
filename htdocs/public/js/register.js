/* 
 * FoxPaw Entertainment proprietary code.
 */

function register() {
    var connString = "https://hackthefuture.herokuapp.com/dashboard/team";

    var toSend = {name: "FoxPaw Hacking", members: [{name: "Ben Elen"}, {name: "Josip Koninckx"}]};

    $.ajax(connString, {
        'data': JSON.stringify(toSend),
        'type': 'PUT',
        'processData': false,
        'contentType': 'application/json'
    });
}
