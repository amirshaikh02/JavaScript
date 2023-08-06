//Date: 28-3-2023

///Array Literal
// let cities=['Mumbai',"Chennai","Benagluru","Kolkata"];//traditionally
// console.log(cities);

// Array instance->new keyword->
// let cities=new Array();//instance 
// cities[0]="Benagluru";
// cities[1]="Kolkata";
// cities[2]="Chennai";
// cities[3]="Delhi";

// console.log(cities);
// //read elements of an array 
// for(let i=0; i<cities.length; i++){
//     console.log(cities[i]);
// }


//create an array using array constructor ->pass an argument 
// let cities=new Array("Delhi","Chennai","Benagluru","Kolkata");
// console.log(cities.length);


let array=[20,50,30,80,10,40];
// sort->it sort the data automatically 
console.log(array.sort().reverse())


//shift->it is used to remove the first element in an array
// let languages=["English","German","Hindi","Tamil","Kannada","Marathi"];
// languages.shift();
// console.log(languages)


//unshift->it is used to add a new element to the first of an array

// languages.unshift("Gujrati");
// console.log(languages);


// pop()->it is used to remove the last element from an array 
// let names=["Praveen","Swapnil","Sai","Sohan","John","Joe"];
// names.pop();
// names.pop();
// console.log(names);

// push()->it is used to add a new element to the end of an array

// names.push("Pradeep")
// names.push("Abhishek");
// console.log(names);

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

//for Each->ES-5  =>Es-6
// names.forEach(function(name) {
//     console.log(name)
// });


//For in ->it is iterable enumeration .which iterate over index values->Es-6
// for(let key in names){
//     console.log(names[key]);
// }


//for-of ->iterate over data and get the data object
// for(let data of names){
//   console.log(data);
// }

// Splice(index)->remove all the items from the given index 
let colors=["red","green","blue","white","yellow"];
console.log(colors.splice(2));//removed elements
console.log(colors);

//splice(index,noofelements)->remove the  number of elements from the marked index.
// splice(1,1)
let countries=["India","USA","UK","Australia","Canada"];
// countries.splice(2,1)
// countries.splice(1,3);
countries.splice(3,2)
console.log(countries);

// splice(index,1,noofelements)=>replace an element from another element in array 
// let names=["John","Joy","Jacky","Bob","Alice"];

// names.splice(2,0,'Pradeep',"Shivam");
// console.log(names);


// join()->join elements to a string 
// let cities=["Pune","Ahmdabad","Mumbai","Delhi"];
// let newcities=cities.join(" ");
// console.log(newcities);

// split()=>split given string into arrays
// let string="Hello How are you?";
// // console.log(string.length)
// let newstring=string.split(" ");
// console.log(newstring.length);
// //iterate ite
// console.log(newstring);


//copy by value and copy by reference->
//copy by reference->Es-6 ... spread operator 
// let num1=[10,20,30];
// let num2=num1;
// console.log(num2);
// console.log(num1);
// num1.push(40);
// console.log(num1);
// console.log(num2);

// Slice()& Splice()-create a copy of an array 
// let array1=[10,20,30,40]
// let array2=array1.slice();//copy the array1 into the array2
// console.log(array1);
// console.log(array2);
// array1.splice(2);//30 40
// console.log(array1);//10 20
// console.log(array2);//10 20 30 40



//empty object 
// let object={};
// object.name="John Smith";
// object.email="john@gmail.com";
// object.age=38;
// console.log(object);

//create a fully loaded object 
let person={
    "name": "John Smith",
    "email": "john@gmail.com",
    "age": 38,
    "designation":"Senior FUll Stack Developer"
}

console.log(person.name);//dot notation
console.log(person['name']);//Brackets notation