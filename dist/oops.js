"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
person1.greet();
person2.greet();
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayGrade() {
        console.log(`I am in grade ${this.grade}.`);
    }
}
const student1 = new Student("Eve", 15, 9);
student1.greet();
student1.displayGrade();
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Car Model: ${this.model}, Year: ${this.year}`;
    }
}
const myCar = new Car("Toyota", 2022);
console.log(myCar.getInfo());
class Shape {
    draw() {
        console.log("Drawing a shape.");
    }
}
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle.");
    }
}
class Square extends Shape {
    draw() {
        console.log("Drawing a square.");
    }
}
function drawShape(shape) {
    shape.draw();
}
const circle = new Circle();
const square = new Square();
drawShape(circle);
drawShape(square);
//# sourceMappingURL=oops.js.map