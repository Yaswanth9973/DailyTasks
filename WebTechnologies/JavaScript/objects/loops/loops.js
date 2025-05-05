//for in loop
let student={
    name:"sri ram",
    age:25,
    city:"east godavari",
    rank:"1st"
}
for(s in student){
    console.log(student[s]);
    
}



//object.keys
//object.values
//object.entries

let person={
    name:"yaswath",
    age:23,
    city:"dindi",
    salary:10000000
}
console.log(person);

var a=Object.keys(person)
var b=Object.values(person)
var c=Object.entries(person)
console.log(a);
console.log(b);
console.log(c);

