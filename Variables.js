if (true) {
    let x = 10;
    //let x=20 
    const y = 20;

    console.log(x, y); // Works: Inside the 
    //re-declaration is not possible with const and let

    x=4;
    //no problem with reassigned with let variables
    //y=5; Const can't be reassigned
    console.log(x);
    
}
//console.log(x, y);   Error: x and y are not accessible outside the block
//Let and Const variables are block scoped 

//Var is function scoped
function FunctionScoped() {
    var a = 5;
    console.log(a); // Works: Inside the function
}
FunctionScoped();
// console.log(a);  Error: `a` is not accessible outside the function

