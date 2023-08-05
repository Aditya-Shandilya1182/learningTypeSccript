const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}
//identityThre and identityFour are exactly same

function getSearchProduct<T>(products: Array<T>): T {
  const index = 3;
  return products[index];
}

function getSearchProductTwo<T>(products: T[]): T {
  const index = 3;
  return products[index];
}

const getSearchProductThree = <T>(products: T[]): T => {
  const index = 3;
  return products[index];
};

//Generic Classes
class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

const boxOfNumbers = new Box<number>(42);
const boxOfStrings = new Box<string>("Hello, TypeScript!");

console.log(boxOfNumbers.getValue()); // Output: 42
console.log(boxOfStrings.getValue()); // Output: Hello, TypeScript!

boxOfNumbers.setValue(100);
boxOfStrings.setValue("Updated value");

console.log(boxOfNumbers.getValue()); // Output: 100
console.log(boxOfStrings.getValue()); // Output: Updated value

class Pair<T, U> {
  constructor(public first: T, public second: U) {}
}

const pairOfStringAndNumber = new Pair<string, number>("hello", 42);
console.log(pairOfStringAndNumber.first); // Output: hello
console.log(pairOfStringAndNumber.second); // Output: 42
