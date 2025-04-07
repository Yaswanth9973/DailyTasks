// // relational operators
// Less than (<) 
// Greater than (>) 
// Less than or equal (<=) 
// Greater than or equal (=>) 

let a=20;
let b=50;

console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

//a. Equality operators     
// Loose equality (==) compares only value 
let c=5;
let d=5;
let e=10;
let f="hii"
let g="hello"
let h="hello"

console.log(c==d);//true
console.log(c==e);//false
console.log(c==f);//false
console.log(f==g);//false
console.log(g==h);//ture

// Strict equality (===) it compares both value and data type 
console.log(c===d);//true
console.log(d===e);//false
console.log(f===h);//false
console.log(h===g);//true
console.log(e===f);//false

// b.In equality operators      
// Lose Inequality (!=) 
console.log(c!=d);//false
console.log(c!=e);//true
console.log(c!=f);//true
console.log(f!=g);//true
console.log(g!=h);//false

// Strict Inequality (!==) 
console.log(c!==d);//false
console.log(d!==e);//true
console.log(f!==h);//true
console.log(h!==g);//false
console.log(e!==f);//true