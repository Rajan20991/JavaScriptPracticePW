let person ={
    name :'Rajan',
    age : 32,
    isStudent : false
};
console.log(person);
console.log(person.name);
console.log(typeof person);
let person2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  isStudent: false
};
person2.firstName = 'Test'; //Test
person.age=20;
person.phone = 902012639;
console.log(person2.firstName);  // Output: Test
console.log(typeof person2);  // Output: object
console.log(person.age); // 20
console.log(person);
