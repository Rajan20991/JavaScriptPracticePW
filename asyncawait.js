function fetchName(name){
    return new Promise((resolve) => {
        setTimeout (()=>{
            resolve(name);
        },5000)
        console.log("1");
    });
}

async function showName() {
    const name = await fetchName("Rajan");
    console.log(name);
}
showName();
console.log("2");