//Arrow Functions
// Shorter Syntax than regular functions and no 'this' binding
ArrowFunc=(a,b)=>
{
    console.log(a+b);
    
}
ArrowFunc();// NaN 
ArrowFunc(4,5);



//Default Parameter functions
function greet(name = "Guest") {
    console.log(`Hello ${name}!`); // ${Variable}-->Template Literal
}
greet(); // Hello, Guest!


//This binding with normal function and arrow function
const obj = {
    value: 42,
    normalFunc: function() {
        console.log(this.value); // 42
    },
    arrowFunc: () => {
        console.log(this.value); // undefined (inherits from global scope)
    }
};
obj.normalFunc();
obj.arrowFunc();


//Map Function
//Modifies Parent
let a=[3,4,5]
var b=a.map(x=>x*2)
console.log(b, "Using Map functions to modify an array");

//Filter Function
var b=a.filter(x=>x%2==0);//b array will be created with the condition satisfied
console.log(b," Using filtered function");

//Math Functions
const r=3.5
console.log(Math.floor(r));
console.log(Math.round(r));
console.log(Math.ceil(r));


//Strings function
const str="AIUB"
const str2=" is my first home"
console.log(str+str2);
console.log(str+str2.replace("first","loving"));

