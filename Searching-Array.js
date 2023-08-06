function SearchNmber(array,key){
    for(let i=0; i<array.length;i++){
        if(array[i]===key){
            console.log(`Number exist in an array`);
            return;
        }
    }
    console.log(`Number is not found`);
}
const array=[4,2,8,1,0];
const key=2;
SearchNmber(array,key)


