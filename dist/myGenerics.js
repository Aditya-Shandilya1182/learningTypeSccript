"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function getSearchProduct(products) {
    const index = 3;
    return products[index];
}
function getSearchProductTwo(products) {
    const index = 3;
    return products[index];
}
const getSearchProductThree = (products) => {
    const index = 3;
    return products[index];
};
class Box {
    constructor(initialValue) {
        this.value = initialValue;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
const boxOfNumbers = new Box(42);
const boxOfStrings = new Box("Hello, TypeScript!");
console.log(boxOfNumbers.getValue());
console.log(boxOfStrings.getValue());
boxOfNumbers.setValue(100);
boxOfStrings.setValue("Updated value");
console.log(boxOfNumbers.getValue());
console.log(boxOfStrings.getValue());
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const pairOfStringAndNumber = new Pair("hello", 42);
console.log(pairOfStringAndNumber.first);
console.log(pairOfStringAndNumber.second);
//# sourceMappingURL=myGenerics.js.map