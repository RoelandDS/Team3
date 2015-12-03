/* 
 * FoxPaw Entertainment proprietary code.
 */

function findLamps() {
    var hue = jsHue();
    var ip = "10.0.1.3";
    var bridge = hue.bridge(ip);
    var username = "33bf4d2254c66f7e94dcee2924a923";
    var user = bridge.user(username);
    var connString = "http://" + ip + "/api/" + username + "/lights";

    $.get(connString, function (data, status) {
        $.each(data, function(index, element ){
            var newOption = index + " - " + element.name;
            var newHTML = '<option value=' + index + '>' + newOption + '</option>';
            $('#lampSelect').append(newHTML);
        });
    }, "json");
}
