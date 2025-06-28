function testScope() {
  if (true) {
    var oldVar = "I am a var"; // function-scoped
    let newLet = "I am a let"; // block-scoped
    const constant = "I am a const"; // block-scoped
  }

  console.log(oldVar);  // Output: I am a var
  // console.log(newLet);  // Error: newLet is not defined
  // console.log(constant); // Error: constant is not defined
}

testScope();
function test(){
  let test2=2;
  var b=3
if (2>1) {
  let message = "Inside block";
  console.log(message); // Output: Inside block
  var a= 1;
  console.log(b);
}
//console.log(message); // Error: message is not defined
console.log(test2);
console.log(a);
}
test();

//hoisting means Cannot access variable before initialization
//console.log(name); // Output: undefined (because of hoisting)
var n = "John";
console.log(n);

