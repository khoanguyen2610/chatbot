//Construct
let Utilities = function () {

}

/*============================================================
 * Set cookie
 * @input: cname: cookie name, cvalue: cookie value, exdays: expire days
 *============================================================*/
Utilities.prototype.setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/*============================================================
 * Get cookie
 * @input: cname: coockie name
 *============================================================*/
Utilities.prototype.getCookie = function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*============================================================
 * Check cookie exist
 * @input: cname: cookie name
 *============================================================*/
Utilities.prototype.checkCookie = function(cname) {
    var data = getCookie(cname);
    if (data != "") return data;
    return false;
}

/*============================================================
 * GenerateId
 *============================================================*/
Utilities.prototype.generateId = function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + s4() + s4() +Date.now().toString().substring(5) + s4() + s4() + s4() + s4();
}
