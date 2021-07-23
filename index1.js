class Person{
    constructor(name){
        this.name = name;
    }
    // printArrowFunction=()=>{
    //     console.log("Arrow "+this.name);
    // }
    // printRegularFunction(){
    //     console.log("Regular "+this.name);
    // }

    printNameArrow(){
        let name='Shepuri';
        console.log("Inside arrow "+this.name);
        setTimeout(()=>{
            console.log("Arrow "+this.name)
        },1000)
    }
    printNameRegular(){
        console.log("Inside regular "+this.name);    
        setTimeout(function(){
            console.log("Regular "+this.name)
        },1000)
    }
}

let p = new Person("Sharath");
// p.printArrowFunction();
// p.printRegularFunction();
p.printNameArrow();
p.printNameRegular();
console.log("This in global scope is "+this.name);