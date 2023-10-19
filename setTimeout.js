// setTimeout(() => {
//    console.log("hrllo sfter 4 secs"); 
// }, 4*1000);


// const func=(params)=>{
//     console.log(params+"hello there");
// }

// setTimeout(func,2000,"hello shivam");


//setInterval(put a delayed opertion in a loop)
function printStuff(){
    console.log("this is for those who are not doing this")
}
setInterval(printStuff, 2000);


// const timerID = setTimeout(printStuff, 0);
// clearTimeout(timerID);

//do for time interval
const timerId = setInterval(printStuff, 4000);
clearInterval(timerId);