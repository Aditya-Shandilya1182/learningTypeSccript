//CLASS
//Classes are the blueprint for creating objects. They define the structure and behavior of objects.

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name}, and I am ${this.age} years old.`
    );
  }
}

//OBJECTS
//Objects are instances of classes, created using the new keyword.

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice, and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob, and I am 25 years old.

//INHERITANCE
//Inheritance allows you to create a new class based on an existing class, 
//inheriting its properties and methods. TypeScript supports single inheritance.

class Student extends Person {
  grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  displayGrade(): void {
    console.log(`I am in grade ${this.grade}.`);
  }
}

const student1 = new Student("Eve", 15, 9);
student1.greet(); // Output: Hello, my name is Eve, and I am 15 years old.
student1.displayGrade(); // Output: I am in grade 9.

//ENCAPSULATION
//Encapsulation allows you to hide the internal details of a class from the outside world, 
//exposing only necessary methods and properties. In TypeScript, you can achieve encapsulation by using 
//access modifiers like public, private, and protected.

class Car {
  private model: string;
  private year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  public getInfo(): string {
    return `Car Model: ${this.model}, Year: ${this.year}`;
  }
}

const myCar = new Car("Toyota", 2022);
console.log(myCar.getInfo()); // Output: Car Model: Toyota, Year: 2022
// Accessing private members directly will result in an error:
// console.log(myCar.model); // Error: Property 'model' is private and only accessible within class 'Car'.

//POLYMORPHISM
//Polymorphism allows objects of different classes to be treated as objects of a common superclass. 
//This allows you to write code that can work with multiple types of objects.

class Shape {
  draw(): void {
    console.log("Drawing a shape.");
  }
}

class Circle extends Shape {
  draw(): void {
    console.log("Drawing a circle.");
  }
}

class Square extends Shape {
  draw(): void {
    console.log("Drawing a square.");
  }
}

function drawShape(shape: Shape): void {
  shape.draw();
}

const circle = new Circle();
const square = new Square();

drawShape(circle); // Output: Drawing a circle.
drawShape(square); // Output: Drawing a square.
