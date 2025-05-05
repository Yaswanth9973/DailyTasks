function factorial(n){
    if(n===1||n===0){
        return 0
    }
    return n*factorial(n-1);
}
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));



let sumEven=(arr)=>{
   let sum = (arr % 2==0)
   let total = sum + arr
   return total
}
console.log(sumEven([1,2,3,4,,5,6,7,8]));

// Q5. Object Operations

var person={
    name:"Yaswanth",
    age:23,
    city:"hyd"
}
function countProperties(obj){
    return person
}
for(var p in person){
    console.log(person[p])}

console.log(countProperties(person));


//Q6. Find Maximum Number in an Array

function findMax(arr){
   for(let i=1;i<=arr;i++)
}
console.log(findMax([1,2,3,4,5,6,7,8,9]));

// Q7. Sum of Marks from an Object	
function sunObjectValue(obj){

}