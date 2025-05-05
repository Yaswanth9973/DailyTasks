//Arrays
//what is a array?
//It is a reference data type where we can store multiple values in a single meemory location
//we can  store homogeneous and heterogenious data
//homogenous - same kind of data
//heterogenious - different kind of data
//in arrays we arrange related data
//by usiing index values we can access the individual elements in the array
//0 start n-1 ending(length of the array) (no of items in the array)
// how to define a array 
//with in square braces[]

var arr1=[1,2,3,4,5]
console.log(arr1);

var arr2=[1,2,3,4,5,"hello","hai",true,null,undefined,{},[[[]],[]],'Good Evening']
console.log(arr2);
console.log(arr2[5]);//by using of operator we can access individual item by using index values
console.log(arr2[arr2.length-1]);

//push()
//how to add new items into array
//adding a new item at the last of the array
arr2.push('bye')
console.log(arr2[arr2.length-1]);

//unshift()
//ading a new item at the starting of the array
arr2.unshift("Hi")
console.log(arr2[0]);

//splice()
//syntax:-splice(indexvalue,no of items to be deleted, value to be added)
//add anywhwere in the array
arr2.splice(3,1,'Hey how is your day!')
console.log(arr2);
arr2.splice(4,0,'Hey how is your day!')
console.log(arr2);

arr2.splice(arr2.length,0,'GOOD MORNING')
console.log(arr2);

//remove indivudual items from the array
//starting
//shift()
//syntax:-arrayname.shift()
console.log(arr2);
arr2.shift()
console.log(arr2);

//anywhere
//splice()
//syntax:-splice(indexvalue,no of items to be deleted, value to be added)
console.log(arr2);
arr2.splice(5,1)
console.log(arr2);

//ending
//pop()
arr2.pop()
console.log(arr2);
arr2.pop()
console.log(arr2);


//how to remove all the items in the array 

//splice()
console.log(arr2.length)

arr2.length=0;
console.log(arr2.length);


arr2.splice(0,arr2.length)
console.log(arr2);


//assigning empty array to the original array

arr2=[]
console.log(arr2);
