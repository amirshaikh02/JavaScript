// String Index 
// length-1

// let firstname='amirshaikh';
// console.log(firstname[firstname.length-1]);

//  ...............................

//1.  trim()   
//  let firstname='  amir  ';
//  console.log(firstname.length);
//  console.log(firstname)

// firstname=firstname.trim();
// console.log(firstname.length)


// // 2. toUppercase () and  ToLowercase()
// let firstname= 'Amirshaikh';
// firstname=firstname.toUpperCase()
// firstname=firstname.toLowerCase()
// console.log(firstname);


//// star index and end index
// firstname=firstname.slice(4,7)
// console.log(firstname)

//..........................................

// // typeof operator

// let age=21;
// let firstname='sunny'

// console.log(typeof age)

//convert number into string
 
// age= age + ""; // or  // age=String(age)
// console.log(typeof age)


//convert string into number

// let s= +'44'; // or // let st=22; // st=Number(st)

// console.log(typeof st)

// ......................................
//// string concatation
// let a='18'
// let b='12'

// let c= +a + +b
// console.log(c);

//......................................

// Template string

// let age=21;
// let name='amir'
// console.log(`my name is ${name} and my age is${age} `)

// .......................................................


// Data Type

// let num;
// console.log(typeof num)
// num= 'fox';
// console.log(typeof num, num)

// let n=null;
// console.log(typeof n); //-> Bug in lan  guage 

//BIGINT
//  let number1= 76n;
//  let number2= BigInt(24)
// console.log(number1 + number2);
// console.log(Number.MAX_SAFE_INTEGER);

// .....................................................

//// BOOLEAN

// let num1=7;
// let num2='7';

// console.log(num1 !=num2);

//.........................................................

//truthy and falsy value

// falsy -> 
//false
//null
// ''
//0
//undefined

// truthy-> example "amir", 1, -1

// let firstname=``;

// if (firstname) {
//     console.log(firstname);
    
// }else{
//     console.log("firstname is kinda empty");
// }  

//.................................................

//ternary operator 

// let age = 18;
// let drink= age>=10 ? "tea or coffee" : "milk"
// console.log(drink);


//AND Operator

//.................................................


// let num= 10.5464866486
// console.log(num.toFixed())
// console.log(parseFloat(num));



//.......................................................
//29-3-23

// let arr =['amir','nishant','rakesh','darshan'];
// console.log(arr);

// let arr2=[10,20,30,40,50];
// console.log(arr2.reverse())
// console.log(arr2[4]);

// let arr =['amir','nishant','rakesh','darshan', 10, 20];

// let newarr='';

// for (let i = 0; i < arr.length; i++) {
//     newarr += `${arr[i]}  `; 
// }
// console.log(newarr);


// another ways of creating an array

// let cities=new Array();
// cities[0]="mumbai",
// cities[1]="pune",
// cities[2]="solapur",
// cities[3]="goa";

// console.log(cities);

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);  
// }


//......................................................
// .....................................................
//.. array method
// 1. sort()
// 2.reverse()
// 3. shift() 

// let array=[1, 3, 70,67,43];
// console.log(array);
// console.log(array.shift());
// console.log(array)

// 4. unshift()

let languages=['marathi','hindi','english','tamil'];

// languages.unshift('gujrati')
// console.log(languages);

// 5. pop()
// languages.pop()
// console.log(languages);

// 6. push()
// languages.push('tamil')
// console.log(languages);

//for horizontal output want then use for loop

// for (let i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// }

// 7. splice(index)
// console.log(languages);
// console.log(languages.splice(2));

    // 7.2 splice(index, no-of-elements)
    // console.log(languages);
    // console.log(languages.splice(1,1));
    // console.log(languages);

    // 7.3 splice(index, no-of-remove data, no-of-elements)
    // console.log(languages);
    // console.log(languages.splice(1,0,'kashmiri'));
    // console.log(languages); 

// 8. join()-> join element to the string 

// let lang=languages.join(' - ')
// console.log(lang);


// 9.split

// let string='hello how are you!'
// let arrays=string.split(' ')
// console.log(arrays)
// console.log(string);
// console.log(arrays.length); 

// let num1=[10,20,30];
// let num2=num2;

// 10. concat()

// let ar1=['blue','green','yellow','white','black'];
// let ar2=[10,30,20,57,88,2]

// console.log(ar1.concat(ar2)); 

// 11 entries()

    // it=ar1.entries();
    // console.log(it.next().value); 
    // console.log(it.next().value); 
    // console.log(it.next().value); 
// ........................................................................


    // const employees=[
    //     {
    //         id:101,
    //         name:"Pradeep",
    //         position:"Jr. Developer",
    //         salary:50000,
    //         skills:["C","C++","Java","Javascript"]
    //     },
    //     {
    //         id:102,
    //         name:"Shivam",
    //         position:"Sr. Developer",
    //         salary:80000,
    //         skills:["React","Vue.js","Next.js","Redux"]
    //     },
    //     {
    //         id:103,
    //         name:"Sohan",
    //         position:"Sr. Manager",
    //         salary:100000,
    //         skills:["Leadership","Communication","Team managnent"]
    //     },
    //     {
    //         id:104,
    //         name:"Jenny",
    //         position:"Designer",
    //         salary:60000,
    //         skills:["Graphic Designer","UI/UX Designer","Adobe Creative Suite"]
    //     }
    // ]


// ........................................................................


    //  const myapp=['buy Books','go to Gym','watch youtube videos']
    //  console.log(myapp.indexOf('go to Gym'))

    //  const newmyapp=[{
    //     title:'by books',
    //     isDone:false,

    //  },{
    //     title:'go to Gym',
    //     isDone:false,

    //  },{
    //     title:'watch youtube videos',
    //     isDone:true

    //  }]

    //  const index=newmyapp.findIndex(function(myapp, index){
    //     console.log(myapp)
    //     return myapp.title==='watch youtube videos'

    //  })
    //  console.log(index);
       


    // console.log(newmyapp);
    // for(let i=0;a<newmyapp.length; i++){
    //     document.write(newmyapp[i].title)
    // }

//...........................

    // // creating object
    // const data={
    //     'name': 'amir',
    //     'designation':'jr. devloper',
    //     'age':'21',
    //     'education':'BE IN IT'
    // }

    // Object.entries(data) // return array 

    // Object.keys(data) //return keys
    // Object.values(data) //return values


//print the array in deffrent loops 

// console.log('for each loop');
// let num=[3,4,6,7]
// num.forEach((Element)=>{
//     console.log(Element)

// })

// console.log('for of loop');
// //for-of-loop
// for (let i of num){
//     console.log(i)
// }

// console.log('for in loop');
// // for in-> gives the index of arrays
// for (let i in num){
//     console.log(num[i])
// }














