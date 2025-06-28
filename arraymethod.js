//1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ["apple", "banana"];
fruits.push("orange");  
console.log(fruits);  // Output: ["apple", "banana", "orange"]
//2. pop(): Removes the last element from an array and returns that elements
let removedFruit = fruits.pop();  
console.log(removedFruit);  // Output: "orange"
console.log(fruits);  // Output: ["apple", "banana"]
//3. shift(): Removes the first element from an array and returns that element. This method changes the length of the array.
let firstFruit = fruits.shift();  
console.log(firstFruit);  // Output: "apple"
console.log(fruits);  // Output: ["banana", "orange"]
//4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits2 = ["banana", "orange"];
fruits2.unshift("apple");  
console.log(fruits2);  // Output: ["apple", "banana", "orange"]
//5. splice(): Adds/removes items to/from an array, starting from a specific index.
let fruits3 = ["apple", "banana", "orange"];
// Removes 1 element at index 1, and inserts "kiwi" at index 1
fruits3.splice(1, 0, "kiwi");  
console.log(fruits3);  // Output: ["apple", "kiwi", "orange"]
//6. slice(): Returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included)
let fruits4  = ["apple", "banana", "orange", "kiwi"];
let citrus = fruits4.slice(1, 3);  
console.log(citrus);  // Output: ["banana", "orange"]







