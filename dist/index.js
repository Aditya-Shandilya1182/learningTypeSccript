"use strict";
console.log('HELLO WORLD');
let sales = 12345;
let worker = "John";
let is_working = true;
let level;
let numbers = [1, 2, 3];
let user = [1, 'John'];
;
let mySize = 2;
console.log(mySize);
function calculateTax(income) {
    if (income < 5000) {
        return income * 1.2;
    }
    return income * 1.3;
}
let employee = { id: 1, name: 'Arya' };
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
//# sourceMappingURL=index.js.map