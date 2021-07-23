function myFunction(){
    console.log(arguments);
}
myFunction('a','b');

// const af=()=>{
//     console.log(arguments);
// }
// af('a','b');

// function myRegFunc(){
//     const af=()=>{
//         console.log(arguments);
//     }
//     af('c','d');
// }
// myRegFunc('a','b');

function myRegFunc(){
    const af=(...args)=>{
        console.log(args);
    }
    af('c','d');
}   
myRegFunc('a','b');