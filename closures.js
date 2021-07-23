
// function greeting(message='Hey'){
//     //let message = 'Hi';
//     function sayHi(name){
//         console.log(message+" "+name);
//     }
//     return sayHi;
// }
// console.log(this.message);
// let hi = greeting();
// let hello = greeting()
// hi('Sharath');
// hello('Sharath');
// here hi and hello are closures where it has the same class with different greeting types
// for(let i=1;i<=3;i++){
//     setTimeout(()=>console.log(`after ${i} seconds(s) ${i}`),1000);
// }

const radius = [3,1,2,4];



const area = function(radius){
    return Math.PI * radius *radius;    
}
console.log(radius.map(area));

function calculateArea(radius){
    const areasArray = [];
    for(var i=0;i<radius.length;i++){
        areasArray.push(Math.PI * radius[i] *radius[i]);
    }
    return areasArray;
    //console.log("Areas Array is "+areasArray);
}
//console.log("Areas Array is "+calculateArea(radius));
