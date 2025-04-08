// Print the multiplication table of a number (e.g., 7) from 1 to 10.

for(let i=1;i<=10;i++){
    console.log("7*"+i+"="+7*i);
}

// Sum all the odd numbers between 1 and 50.

let sum=0;
for(let i=1;i<=50;i++){
    if(i%2==1)
        {
        sum+=i;
    }
}
    console.log(sum);


// Print all multiples of 5 from 1 to 100.

for(let i=1;i<=100;i++){
    if(i%5==0)
        console.log(i);
}