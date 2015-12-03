/* 
 * FoxPaw Entertainment proprietary code.
 */

function register() {
    var connString = "https://hackthefuture.herokuapp.com/dashboard/team";

    var toSend = {name: "FoxPaw Hacking", members: [{name: "Ben Elen"}, {name: "Josip Koninckx"}]};

    alert(connString);
    alert(JSON.stringify(toSend));

    $.ajax(connString, {
        'data': JSON.stringify(toSend),
        'type': 'PUT',
        'processData': false,
        'contentType': 'application/json'
    });
}
