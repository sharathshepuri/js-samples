// simple invocation
function myFunc(){
    console.log(this);
}
myFunc();

//method invocation
const myObj = {
    method(){
        console.log(this);
    }
}

myObj.method();

//indirect invocation using call and apply
function myFunction(){
    console.log(this);
}

const myContext = {value:'A'}

myFunction.call(myContext);
myFunction.apply(myContext);

//function invocations are done in 4 ways
// 1)simple invocation

//constructor invocation

function myF(){
    console.log("myF "+this);
}

new myF();

//arrow function this

const myObject = {
    myMethod(items){
        console.log(this);
        const callback=()=>{
            console.log(this);
        }
        items.forEach(callback);
    }
}

myObject.myMethod([1,2,3])