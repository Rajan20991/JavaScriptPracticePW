function loginUser() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Logged in as Sidharth"), 6000);
   });
}


function fetchDashboard() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Dashboard loaded"), 3000);
   });
}

loginUser()
.then(result => {
    console.log("loginUserCalled", result)
    return fetchDashboard()})
.then(result => {
    console.log("fetchDashboardCalled", result)});
//function fetchVoid() {
  // console.log("Void function called");
//}


//async function runApp() {
  // const loginMessage = await loginUser();
   //console.log(loginMessage);


   //const dashboard = await fetchDashboard();
   //console.log(dashboard);
//}


//runApp();
//fetchVoid();


