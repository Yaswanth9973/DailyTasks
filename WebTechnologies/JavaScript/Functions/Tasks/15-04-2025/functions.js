// JavaScript Recap Practice
// Create an object studentInfo with name, age, and an array of subjects.
// Add a function getDetails() to return a summary string with student details.

var studentInfo={name:"yaswanth",age:23,subjects:["maths","physics","science"],
getDetails:function(){
    return studentInfo.name +" "+ studentInfo.age+" "+ studentInfo.subjects
}
}
console.log(studentInfo.getDetails());


// Function Conversion
// Write a function to find the factorial of a number.
function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log(fact);
}
factorial(6);


// Convert the same into:
// Function expression
var factorial=function (num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log(fact);
}
factorial(5);

// Arrow function
var factorial=num=>{
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log(fact);
}
factorial(4);
// IIFE


// Prime Number Checker
// Task:
// Write a function isPrime(num) that:
// Returns true if the number is prime
// Returns false if not prime
function isPrime(num){
    let number=0;
    for(let i=1;i<=num;i++)
        {
        if(num%i==0)
            number++;
    }
    if(number==2)
        return true;
    else
    return false;
    }
console.log(isPrime(2));
console.log(isPrime(8));



// Factorial Calculator

// Task:
// Implement factorial(n) that:

// Calculates factorial using a loop (not recursion)
// Returns 1 for input 0
// Returns -1 for negative inputs
function findfactorial(num){
    if(num<0){
        return -1;
    }
    else if(num==0){
        return 0;
    }
    else{
        let fact=1;
        for(let i=1;i<=num;i++){
            fact=fact*i;
        }
        return fact;
    }
}
console.log(findfactorial(1));

// Palindrome Checker
// 	Task:
// Create isPalindrome(str) that:
// Returns true if string is palindrome (case-insensitive)
// Ignores non-alphanumeric characters
// Returns false for empty strings
