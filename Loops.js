const a=[2,3,4]
//Prints the elements
for(let ab of a)
{
    console.log(ab);
    
}
//Prints the index
for(let ab in a)
{
    console.log(ab);
    
}
//forEach loops can access elements,index and array
a.forEach(
        (element,index,array)=>
        {   
            console.log(array); //will print the array 3 times as a consists of 3 elements 
            
        }
    )