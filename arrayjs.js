let colors = ["red", "green", "blue",null];
let colorscolor = ["red", "green", 12];
console.log(colors[0]);  // Output: red
console.log(colors.length);  // Output: 3
console.log(typeof colors);  // Output: object
console.log(colorscolor);
console.log(colors);
//for loops
for (color of colors ){
    console.log(color);
}
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
colors.forEach(function(color) {
    console.log(color);
});
// Or using arrow function
colors.forEach(color => console.log(color));
