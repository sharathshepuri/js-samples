let animal = {
    walk(){
        if(!this.isSleeping){
            console.log('I walk');
        }
    },
    sleep(){
        this.isSleeping = true;
    }
}

let rabbit = {
    name:"Alice",
    __proto__:animal
}

rabbit.sleep();

alert(rabbit.isSleeping);
alert(animal.isSleeping);