function slow(x){
    //CPU intensive operation in here
    console.log(`Value passed is ${x}`);
    return x;
}

function cachingDecorator(f){
    let cache = new Map();
    return function (x) {
        if(cache.has(x)){
            cache.get(x);
        }
        let result = f(x);
        cache.set(x,result);
        return result;
    }
}

slow = cachingDecorator(slow);
slow(1);
console.log('Slow(1) called again '+slow(1));