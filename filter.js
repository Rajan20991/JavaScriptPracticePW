let nums = [1,2,3];
let even = nums.filter(u => (u%2===0));
console.log(even);
let result = [{testid:1,status:'pass'},{testid:2,status:'fail'}];//array of objects
let passed = result.filter(u => (u.status==='pass'));
let failed = result.filter(u=> (u.status==='fail'));
console.log(passed[0].testid);
console.log(failed);

