//Date:29-3-23

//Simple object of employee
// let employee ={
//     name:"joe",
//     age: 38,
//     designation:"Sr. Manager",
//     address:"Los Angeles",
//     salary:200000
// }

// console.log(
// `
// Name: ${employee.name}
// Age:${employee.age}
// designation:${employee.designation}
// address:${employee.address}
// Salary:${employee.salary}
// `
// );


//Array of employee objects
// let employees=[
//     {
//         name:"joe",
//         age:38,
//         designation:"Sr. Manager",
//         address:"Los Angeles",
//         salary:200000
//     },
//     {
//         name:"Pavan",
//         age:34,
//         designation:"Senior Developer",
//         address:"Hyderabad",
//         salary:2000000
//     },
//     {
//         name:"Pradeep",
//         age:24,
//         designation:"Jr.Developer",
//         address:"Bengaluru",
//         salary:500000
//     },
//     {
//         name:"Suman",
//         age:44,
//         designation:"Sr.Developer",
//         address:"Bengaluru",
//         salary:2000000
//     },

//     {
//         name:"Jenny",
//         age:34,
//         designation:"System Analyst ",
//         address:"Delhi",
//         salary:300000
//     },
// ]

// Iterate through loop 
// for(let i=0;i<employees.length;i++){
//     console.log(
//         `
//         Name: ${employees[i].name}
//         Age:${employees[i].age}
//         Desg.: ${employees[i].designation}
//         Address:${employees[i].address}
//         salary:${employees[i].salary}
//         `
//     )
// }


//Nested objects->object inside objects 
// let student={
//     name:"Leonard",
//     age:32,
//     course:{
//         coursename:"Development",
//         courseplatform:"Lets Upgrade",
//         duration:6,
//         rank:2
//     },
//     college:{
//         name:"University of Zimbabwe",
//         cities:"Haere",
//         estd:1980
//     },
//     address:{
//         city:"Haere",
//         state:"Africa",
//         country:"Zimbabwe"
//     }
// }

//access person name
// console.log(student.name)

//access city and state 
// console.log(student.address.city);
// console.log(student.address.state)
// console.log(student);

//combination of the above 2->array of objects and nested objects.
// const data={
//     apples:[
//         {color:'red',quantity:2},
//         {color:'green',quantity:5},
//         {color:'black',quantity:3},
//     ],
//     bananas:[
//         {color:'yello',quantity:4},
//         {color:'green',quantity:3},
//     ],
//     oranges:[
//         {color:'orange',quantity:3},
//         {color:'green',quantity:2},   
//     ]
// }

// // console.log(data);
// for(let fruit in data){
//     // console.log(data[fruit].length);
//     console.log(fruit)
//     for(let i=0;i<data[fruit].length;i++){
//   console.log(`
//   Color:${data[fruit][i].color}
//   Quanity:${data[fruit][i].quantity}
//   `)      
//     }
// }


// const students={
//     'student1':{
//         'name': 'John',
//         'grades':{
//             'math':90,
//             'english':95,
//             'history':85
//         }
//     },
//     'student2':{
//         'name':'Jane',
//         'grades':{
//             'math':80,
//             'english':85,
//             'history':75
//         }
//     },
//     'student3':{
//         'name':'jack',
//         'grades':{
//             'math':80,
//             'english':95,
//             'history':65
//         }
//     },
// }

// for(let student in students){
//     console.log(`Name:${students[student].name}`);
//     console.log("Grades");
//     for(let subject in students[student].grades ){
//         console.log(`${subject}:${students[student].grades[subject]}`);
//     }
// }


const employees=[
    {
        id:101,
        name:"Pradeep",
        position:"Jr. Developer",
        salary:50000,
        skills:["C","C++","Java","Javascript"]
    },
    {
        id:102,
        name:"Shivam",
        position:"Sr. Developer",
        salary:80000,
        skills:["React","Vue.js","Next.js","Redux"]
    },
    {
        id:103,
        name:"Sohan",
        position:"Sr. Manager",
        salary:100000,
        skills:["Leadership","Communication","Team managnent"]
    },
    {
        id:104,
        name:"Jenny",
        position:"Designer",
        salary:60000,
        skills:["Graphic Designer","UI/UX Designer","Adobe Creative Suite"]
    }
]
//forEach 
employees.forEach((employee)=>{
console.log(`
Employee ID:${employee.id}
Name:${employee.name}
Position:${employee.position}
Salary:${employee.salary}
Skills:${employee.skills.join("-----")}
`)
})

//forof ->Homework ->
for(let data  of employees){
    
}