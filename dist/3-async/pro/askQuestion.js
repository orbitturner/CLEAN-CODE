"use strict";
var readline = require('readline');
function askQuestion(question) {
    var readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(function (resolve) {
        readlineInterface.question(question, function (answer) {
            resolve(answer);
            readlineInterface.close();
        });
    });
}
module.exports = askQuestion;
