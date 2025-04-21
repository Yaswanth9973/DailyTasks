//function declaration

function hello(){
    let a=10;
    let b=20;
    console.log(a+b)
}
hello();

//function expression
// named function expression
var nameFun=function namedFunction(){
    var user="yaswanth"
    var age=23
    console.log(user+" "+age);
    
}
nameFun()

//annonomous function
var ann= function(){
    let y=100
    console.log(y);
    
}
ann()

//arrow function
var arrow=()=>{
    const s="YASIN"
    console.log(s);
    
}
arrow()

//RETURN VALUE
function returnValue(){
    let a=10;
    console.log(a);
    
    return "This a return value"
}
console.log(returnValue());
          //or//
var value=returnValue();
console.log(value);

//parameters and arguments
function parameters(a,b){
     return a+b
}
console.log(parameters(10,5));



