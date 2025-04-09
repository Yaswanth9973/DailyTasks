//unconditional loops
//for in
//for of

//non primative data types

//array, objects
var person={
    name:"yaswanth",
    age:23,
    city:"hyd"
}
console.log(person);
var details=["yaswanth",23,'hyd']
console.log(details);

//for in  ---we use objects
for(var x in person){
    console.log(x)
    console.log(person[x])
}
//for of ----we use arrays (symbol.iteration() method)
for(var x of details){
    console.log(x);
}