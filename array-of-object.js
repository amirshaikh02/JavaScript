//simple onject created->

// let objdata={
//     name:'Amira',
//     age:21,
//     designation:'jr.devloper',
//     salary:200000,
//     address:'pune'
// }

// console.log(
//     `
//     Name: ${objdata.name}
//     Age: ${objdata.age}
//     Designation: ${objdata.designation}
//     Salary: ${objdata.salary}
//     Address: ${objdata.address}
//     `
// );

//Nested object -->
// let objdata={
//     name:'Amira',
//     age:21,
//     Marks:{
//         html: 90,
//         css: 85,
//         javascript:70,
//         bootstrap:80

//     },
//     address:'pune',
//     college:{
//         name:'svit',
//         location:'nashik',
//         estd:'seen 1990'
//     },
//     subjects:{
//        subj1: 'python',
//        subj2: 'java',
//        subj3: 'html css',
//     },
// }
//access name
// console.log(objdata.college);
// console.log(objdata. subjects);





// //Array of object-->

// let emp=[
//     {
//         name:"faizal",
//         age:28,
//         designation:"jr.Manager",
//         address:"pune",
//         salary:23000  
//     },
//     {
//         name:"priya",
//         age:20,
//         designation:"system engineer",
//         address:"chennai",
//         salary:23000
//     },
//     {
//         name:"rukruk",
//         age:25,
//         designation:"java devloper",
//         address:"kolkata",
//         salary:23000
//     },
//     {
//         name:"tipika",
//         age:24,
//         designation:"python devloper",
//         address:"nagpur",
//         salary:23000
//     },
//     {
//         name:"jannu",
//         age:23,
//         designation:"Web devloper",
//         address:"mumbai",
//         salary:23000
//     },
// ]


// // iterate through loop-->
// for (let i = 0; i < emp.length; i++) {
//     console.log(
//         `
//         Name: ${emp[i].name}
//         Age: ${emp[i].age}
//         Designation: ${emp[i].address}
//         Salary: ${emp[i].address}
//         `
//     )  
    
// }
// console.log(Array.isArray (emp))


//using for-in-loop-->
// for(let i in emp){
//     console.log(emp[i]);
// }

//using for-of-loop-->
// for(let i of emp){
//     console.log(i);
// }

// combination of both-Array-of-object and nested-objects -->
const data={
    apples:[
        {color:'red',quantity:2},
        {color:'green',quantity:5},
        {color:'black',quantity:3},
    ],
    bananas:[
        {color:'yello',quantity:4},
        {color:'green',quantity:3},
    ],
    oranges:[
        {color:'orange',quantity:3},
        {color:'green',quantity:2},   
    ]
}
// console.log(Array.isArray(data));

// console.log(data)
for(let i in data){
    console(data[i].length)
    console.log(i);
    console.log(typeof data)
}




