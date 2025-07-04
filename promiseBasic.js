const randomNumberPromise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        const randomValue = 3;
        console.log(randomValue);
        if(randomValue>0){
            resolve(randomValue);
        }
        else{
            reject(new  Error("Number is too small"))
        }
    },1000);
});

randomNumberPromise
.then(result => {
    console.log("promise is fullfilled with num " , result)
})
.catch(error => {
    console.log("promise is rejected with error", error)
});


