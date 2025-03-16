//Spread Operator
const a=[2,3,1]
const b=[...a,6] // ...a is spread operator which is used for expanding the array
console.log(b);

const car={
    name:"BMW",
    model: "2021",
    color: "red"
}
const modifiedCar={
    color: "green"
}

const newCar={...car,...modifiedCar}
console.log(newCar);

//Rest Operator
ArrowFunc=(a,... params)=>{
    console.log(a);
    console.log(params);
}
ArrowFunc(1,2,3,4);
//rest operator is used as last parameter
// if there are more parameters then they should be defined before the rest operator