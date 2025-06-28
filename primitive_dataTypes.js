let name = "John Doe";
console.log(name);  // Output: John Doe
console.log(typeof name);  // Output: string
let age = 30;
let price = 99.99;
console.log(age);  // Output: 30
console.log(price);  // Output: 99.99
console.log(typeof age);  // Output: number
console.log(typeof price);  // Output: number
let isMarried = false;
console.log(isMarried);  // Output: false
console.log(typeof isMarried);  // Output: boolean
let car = null;
console.log(car);  // Output: null
console.log(typeof car);  // Output: object (this is a quirk in JavaScript)
let salary;
console.log(salary);  // Output: undefined
console.log(typeof salary);  // Output: undefined
let sym1 = Symbol("identifier");
let sym2 = Symbol("identifier");
console.log(sym1 === sym2);  // Output: false (symbols are always unique)
console.log(typeof sym1);  // Output: symbol