var empDetails={
    empId:"597",
    empName:"Yaswanth",
    contact_No:987654321,
    mail:'yaswanth@gmail.com'
}
console.log(empDetails);

//To access an single item
//objectName.keyname or objectreference.keyname

console.log(empDetails.empId);
console.log(empDetails["empName"]);
//to access individual we have 2 ways . [] "" for static keys



//to create an object we have mltiple ways
//object literal
//factory function
//constructor function
//classical way


//object literal way
let bike1={
    company:"royalnfielf",
    model:"GT360",
    color:'red',
    manYear:2024,
    price:2500000,
    bike2:{

    },
    arr:[],
    stock:true,
    buy:function(){
        console.log('You can buy this bike');
        
    }
}
console.log(bike1);
console.log(bike1.model);



//factory function way
function data(name,age){
    return{
        name,
        age
    }
}
let k=data("kiran",26)
console.log(k);

                    // or

function userLogin(username,password){
    return{
        username,
        login(){console.log(`${username} logged in`);
        }
    }
}
let user1=userLogin("Yaswanth","yash@123")
user1.login();


//constructor way
function Bikes(brand,model,price,year,cc){
    this.brand=brand;
    this.model=model,
    this.price=price,
    this.year=year,
    this.cc=cc
    console.log(brand,model,price,year,cc);
    console.log(`Driving the ${this.brand} ${this.model}`);
};
let bikeOne=new Bikes('RoyalEnfield','GT360',300000,2024,360)
let bikeTwo=new Bikes('Honda','shine',150000,2023,180)

//classical
class Car{
    constructor(carname,year){
        this.carname=carname;
        this.year=year;
    }

}
let car1= new Car("Audi",2025)
console.log(car1);


//update adding delete
let person={
    name:"kiran",
    age:23
}
console.log(person.name);
//update the object
person.name="YASWANTH"
console.log(person);

//Adding to the object
person.location="Hyderabad"
console.log(person);

//delete in object
delete person.age;
console.log(person);
