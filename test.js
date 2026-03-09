// let student={
//  fname:"dhaemik",
//  result:[1,2,3,4,{
//     name:"urmit",
//  }],


// }

// console.log(student.fname);

// array.forEach(student.result => {
//     console.log(array);
// });


// let arr=[1,2,3,4,5];
// arr.forEach(t => {
    // console.log(t);
// });
// let arr=[1,2,3,4,5];
// let sum=0;
// arr.forEach(ans => {
//     sum+=ans;
//     // console.log(sum);
// });
// console.log(sum);

// let student={
//     name:"urmit",
//     roll:49,
//     arr:[1,2,3,4,5],
// }

// console.log(student.name,student.roll);


// arr=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// arr.forEach(val => {
//     if(sum=val%2==0){
//         sum+=val;
//     console.log(sum);}
// });
//  console.log(sum);

// chat practis


// arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];

// let sum=0;
// arr.forEach(val => {
//        if(val>5 &&val<10){
//         console.log(val);
//        }
// });
//  console.log(sum);



let nameOfStd={
    name:"urmit",
    age:19,
    arr:[1,2,3,4,5,6,7],

};
for (const key in nameOfStd){

    console.log(key,nameOfStd[key]);
    Array.isArray(nameOfStd[key])
        // for (const ar of key) {
        //     console.log("4");
            
        // }
    
    
}