//eight methods on an array
//filter,map,reduce,some,every,includes,forEach,

const items=[
    {name:'book',price:100},
    {name:'pen',price:10},
    {name:'eraser',price:5},
    {name:'sharpner',price:10},
    {name:'protractor',price:50},
    {name:'divider',price:200}
]

//filter

const filteredItems = items.filter((sha)=>sha.price>5);
console.log(filteredItems);
console.log(items);

//map

const mappedItems = items.filter((i)=>i.price>10).map((item)=>item.name);

console.log(mappedItems)

//reduce

const totalSum = items.reduce(
    (currentVal,item)=>{
    return item.price+currentVal
    },0);

    console.log(totalSum);

    //forEach

    items.forEach((d)=>console.log(d.price));

    //some

    const some = items.some((i)=>i.price>50);
    console.log(some);

    const every = items.every((i)=>i.price>1);
    console.log(every);