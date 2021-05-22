"use strict";
var readline = require('readline');
var readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
readlineInterface.question("What is your name? ", function (name) {
    readlineInterface.question("What is your job? ", function (job) {
        readlineInterface.question("How old are you? ", function (age) {
            console.log("Hello " + name + ". You are a " + age + " year old " + job + ".");
            readlineInterface.close();
        });
    });
});
