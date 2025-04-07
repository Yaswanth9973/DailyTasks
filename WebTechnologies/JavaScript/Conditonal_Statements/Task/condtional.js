// Write a JavaScript program that calculates a student’s average grade and prints a message based on the following criteria:
// 90 or above: Print: "Excellent!"
// 80 to 89: Print: "Good Job!"
// 70 to 79: Print: "Needs Improvement."
// 60 to 69: Print: "Passing, but Could Do Better."
// Below 60: Print: "Failing."
// //  

let a=80;
if(a>=90){
    console.log("Excellent");
}
else if(a>=80 && a<=89){
    console.log("Good Job!");
}
else if(a>=70 && a<=79){
    console.log("Needs Improvement");
}
else if(a>=60 && a<=69){
    console.log("Passing, but Could Do Better.");
}
else{
    console.log("Failing.");
}