// let hamster = {
//     stomach:[],
//     eat(food){
//         //this.stomach.push(food);// every hamster will have stomach full
//         this.stomach = [food]// only the hamster who ate the food will be full
//     }
// }

// let speedy = {
//     __proto__:hamster
// }
// let lazy = {
//     __proto__:hamster
// }

// speedy.eat("Dosa");
// console.log(speedy.stomach)
// console.log(lazy.stomach);


let animal = {
    eat(){
        this.full = true;
    }
}

let rabbit = {
    __proto__:animal
}

rabbit.eat();
console.log(rabbit.full);
console.log(animal.full);