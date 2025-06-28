var n= 'Test';
var name2= 2;
console.log(n);
console.log(name2);
let city = "New York";
console.log(city); // Output: New York
let score = 10;
score = 20;
console.log(score); // Output: 20
const pi = 3.14;
console.log(pi); // Output: 3.14
// pi = 3.1416; // Error: Assignment to constant variable
//FUNCTION SCOPE
function example() {
  var message = "Hello"; // Accessible only inside this function
  console.log(message);  // Output: Hello
}
//console.log(message); // Error: message is not defined

//Block Scope (with let and const): Variables declared with let and const 
// are scoped to the nearest block {}.
function test2(){
    let test2 ='success';
if (true) {
  let message = "Inside block";
  console.log(message); // Output: Inside block
}
//console.log(message); // Error: message is not defined
console.log(test2);
}

console.log('test4');



