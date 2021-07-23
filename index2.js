// let myFunc = {
//     showArgs(){
//         console.log(arguments);
//     }
// }
// myFunc.showArgs(1,2,3,4);

// let myFuncA = {
//     showArgs:()=>{
//         console.log(arguments);
//     }
// }
// myFuncA.showArgs(1,2,3,4);

let me = {
    name:'Sharath',
    thisInArrow:()=>{
        console.log('My name is '+this.name);
    },
    thisInRegular(){
        console.log('My name is '+this.name);
    }
}

me.thisInArrow();
me.thisInRegular();

