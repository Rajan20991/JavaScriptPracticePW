let student = {
  name: "Alice",
  grade: 12,
  subjects: {
    math: "A",
    science: "B"
  }
};
console.log(student);
console.log(student.subjects.math);  // Output: A

//Objects for Functionality
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("Car started");
  }
};

car.start();