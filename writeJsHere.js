//All your code goes here



var squareAll = function (arr) {
    var results = [];
    results = arr.map(function(num) {
        return num * num;
    });
    return results;
}

var ar = [1,3,5,9];
console.log(ar);
console.log(squareAll(ar));

var validCredentials = function (username, password) {
    var minLen = 8;
    if (username.length < 8 || password.length < 8) {
        return false;
    } else return true;
}

var username = "JoeMahoney";
var password = "SimplePassword";

console.log (username);
console.log (password);
console.log (validCredentials(username, password));
password = "short";
console.log (password);
console.log (validCredentials(username, password));

var sayHello = function (lang) {
    if (lang == "en") return ("Hello!");
    if (lang == 'es') return ('Hola!');
    if (lang == 'fr') return ('Bonjour!');
    return ("Sorry, don't know that language.");
}

console.log (sayHello('es'));
console.log (sayHello('ch'));