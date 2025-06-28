let nums = [1,2,3];
let square = nums.map(num=>num*num);
console.log(square);
let doubled = nums.map(num => num * 2);  
console.log(doubled);  // [2, 4, 6]

let usernames = ['user1','user2'];
let testusers = usernames.map(u=>({username:u,password:u +'@123'}));
console.log(testusers);