class Hero{
    constructor(name){
        this.heroName = name;
    }
    // logName(){
    //     console.log(this.heroName);
    // }
    logName=()=>{
        console.log(this.heroName);
    }
}

const h = new Hero('Banana');
//h.logName();
//setTimeout(h.logName.bind(h),1000);
setTimeout(h.logName,1000);