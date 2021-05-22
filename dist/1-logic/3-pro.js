"use strict";
function numberToAccountingString(number) {
    if (number == null)
        return;
    if (number < 0)
        return "(" + Math.abs(number) + ")";
    return number.toString();
}
console.log(numberToAccountingString(undefined));
console.log(numberToAccountingString(0));
console.log(numberToAccountingString(10));
console.log(numberToAccountingString(-5));
