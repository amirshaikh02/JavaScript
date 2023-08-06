// const person={
//     name :'amir',
//     age : 21,
//     'hobbies' :['cricket','playing games','acting']
// }

// console.log(Object.keys(person));
// console.log(person);

//adding key value pair
// person.gender='male';
// console.log(person['hobbies']);


//iterate-for-in-loop -->

// for(let i in person){
//     console.log(`${i}: ${person[i]}`)
// }

//computed properties -->

const key1='objkey1'
const key2='objkey2'

const value1='myvalue1'
const value2='myvalue2'

const objdata={
    [key1] : value1,
    [key2] : value2
}
console.log(objdata);
