"use strict";
function calculateTotal(items, options) {
    var t = 0;
    items.forEach(function (i) {
        t += i.price * i.quan;
    });
    t = t - t * (options.dis || 0);
    t = t * 1.1;
    t = t + (options.ship || 5);
    return t;
}
var testItems = [
    { price: 15, quan: 2 },
    { price: 20, quan: 1 },
    { price: 5, quan: 4 }
];
// console.log(calculateTotal())
// console.log(calculateTotal(testItems))
// console.log(calculateTotal(undefined, {}))
console.log(calculateTotal([], {}));
console.log(calculateTotal(testItems, {}));
console.log(calculateTotal(testItems, { ship: 0 }));
console.log(calculateTotal(testItems, { dis: .75 }));
console.log(calculateTotal(testItems, { ship: 12 }));
