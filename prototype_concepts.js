let animal = {
    walk(){
        if(this.sleeping){
            alert('I am walking');
        }
    },
    sleep(){
        this.sleeping = true;
    }
}

let rabbit = {
    name:'Bunny',
    __proto__:animal
}

rabbit.sleep();
rabbit.walk();