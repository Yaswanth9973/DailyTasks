// Display Student Data(Using for...in loop)  
// Month Display (Using Switch) takes a month number (1-12)
// Create an array that contains the marks of 5 students in an exam Use a for...of loop and calculate the average marks.


let stdData={
    name:'Yaswanth',
    age:'23',
    gender:'male',
    city:'EastGodavari',
    stdID:597
}


for(var a in stdData){
    console.log(a)
    console.log(stdData[a])
    console.log(a+':'+stdData[a]);
}


let month=4;
switch(month){
    case 1: console.log('JANUARY')
    break;
    case 2: console.log('FEBRUARY')
    break;
    case 3: console.log('MARCH')
    break;
    case 4: console.log('APRIL')
    break;
    case 5: console.log('MAY')
    break;
    case 6: console.log('JUNE')
    break;
    case 7: console.log('JULY')
    break;
    case 8: console.log('AUGUST')
    break;
    case 9: console.log('SEPTEMBER')
    break;
    case 10: console.log('OCTOBER')
    break;
    case 11: console.log('NOVEMBER')
    break;
    case 12: console.log('DECEMBER')
    break;
    
}

let stdMarks=[55,83,70,60,93];
for(let marks of stdMarks){
    console.log(marks);
    
}