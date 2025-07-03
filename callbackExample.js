function greet(name,callback){
    console.log('hello' + name)
    callback();
}
//callback function
function welcome(){
    console.log('This function is created be passed as parameter to callback')
}
//greet('Rajan',welcome);

//callback with async
function printinfo(name,callback){
    setTimeout(function(){
        console.log('print info for ' + name);
        callback("please wait for given time")
    },2000);
    console.log("This will execute befoew above console.log")
}

function displayMessage(msg){
    console.log(msg);
}
printinfo('rajan',displayMessage);