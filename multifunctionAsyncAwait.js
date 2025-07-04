function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Logged in as Sidharth"), 5000);
    });
}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard loaded"), 1000);
    });
}

async function runApp() {
    const loginMessage = await loginUser();
    console.log(loginMessage);

    const dashboard = await fetchDashboard();
    console.log(dashboard);
}
async function runApp2() {
       const dashboard = await fetchDashboard();
    console.log(dashboard);
}

function fetchvoid(){
    console.log("sync method");
}

runApp();
runApp2();
fetchvoid();


