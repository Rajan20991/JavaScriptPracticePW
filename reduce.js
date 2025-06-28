let nums = [1,2];
let sum = nums.reduce((n,num) => n*num,7);
console.log(sum);
let results = ['pass', 'fail', 'pass'];
let passcount = results.reduce((acc,n)=> n==='pass'?acc+1:acc,0);
console.log(passcount);