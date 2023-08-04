console.log('HELLO WORLD');
//tsc --init : to create tsconfig.json

let sales: number = 12345;
let worker: string = "John";
let is_working: boolean = true;
let level: any;

let numbers: number[] = [1,2,3];

 //tuples
 let user: [number, string] = [1, 'John'];

 //enum
const enum Size {small = 1, medium, large}; //values will be assigned as medium = 2 and large = 3
 let mySize: Size = Size.medium;
 console.log(mySize);
 //using const with enum optimizes the code

 //FUNCTIONS
function calculateTax(income: number): number{
    if(income < 5000){
        return income * 1.2;
    }
    return income * 1.3;
}