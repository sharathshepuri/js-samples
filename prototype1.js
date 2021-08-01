let animal = {
    eats:true,
    walk(){
        alert('Animal walks');
    }
};
let rabbit = {
    jumps:true,
    __proto__ : animal
}

let longEar = {
    earLength:10,
    __proto__:rabbit
}


// alert(rabbit.eats)
// alert(rabbit.jumps)

//alert(rabbit.walk());
longEar.walk();
alert(longEar.jumps);