function orderCoffee(callback) {
  setTimeout(() => {
    callback("☕ Coffee is ready!");
  }, 2000);
}

orderCoffee((coffee) => {
  console.log(coffee);
});

function waitWithCallback(ms, callback) {
 setTimeout(() => {
   callback(`⏳ Waited ${ms}ms (callback)`);
 }, ms);
}


console.log(" Step 1 - Start (callback)");


waitWithCallback(3000, (msg) => {
 console.log(msg);
 console.log("Step 2 - End (callback)");
});


console.log("Step 3 - This runs immediately after async call");


