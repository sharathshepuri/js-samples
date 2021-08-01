let user = {
    firstName:'Sharath',
    lastName:'Shepuri',
    set fullName (value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
    get fullName(){
        console.log(`${this.firstName}, ${this.lastName}`);
    }
}

let admin = user;
admin.isAdmin = true;

admin.fullName = 'Pyapili Deepika';
admin.fullName;
user.fullName;

// let admin ={
//     isAdmin:true,
//     __proto__:user
// }

// admin.fullName="Pyapili Deepika";
// admin.fullName;
// user.fullName;