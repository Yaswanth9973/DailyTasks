//find the maximum of two numbers

function findMax(a,b){
      if(a<b){
        return b
      }
      else if(a==b){
        return b
      }
      else{
        return a
      }
}
console.log(findMax(2,7))
console.log(findMax(5,3))
console.log(findMax(4,4))


//simple calculator
function calculator(a,b,operation){
    switch(operation){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '%':
            return a%b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return(b==0)?"divided by zero":a/b;
        default: return"Invalid input";
    }
}
console.log( calculator(10,20,'+'));
console.log( calculator(10,20,'-'));
console.log( calculator(10,20,'%'));
console.log( calculator(10,20,'*'));
console.log( calculator(10,20,'/'));
console.log( calculator(10,0,'/'));
console.log( calculator(10,20,'?'));

//check postitive/negative/zero
function checkNumber(num){
    if(num>0){
        return "Positive"
    }
    else if(num<0){
        return "Negative"
    }
    else if(num==0){
        return "Zero"
    }
    else{
        return "Invalid"
    }
}
console.log(checkNumber(5));
console.log(checkNumber(-2));
console.log(checkNumber(0));
console.log(checkNumber("Hi"));


//Find Array Sum
function arraySum(arr){
    if(arr.length==0){
        return 0
    }
     let sum=0;
     for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
        }
    return sum;
}
console.log(arraySum([1,2,3,4,5]));
console.log(arraySum([]));




//Find Average of array(New)
function arrayAverage(arr){
    if(arr.length==0){
        return 0
    }
     let sum=0;
     for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
        
        }
    total=sum/arr.length;
    return total;
}
console.log(arrayAverage([1,2,3,4,5,10]));
console.log(arrayAverage([]));