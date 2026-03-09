// function print(){
//  console.log("hello");
// }
// print();

// function pluse(a ,b){
//     // console.log(a+b);
//   sum= a+b;
//   return sum;
// }
// pluse(100,100);
// console.log(sum);


//this is modern arrow fun ------------


// const arow=(u,r)=>{
//     console.log(u+r);
// }

// arow(20,2);


// const multy=(a,b)=>{
//     console.log(a*b);

// }
// multy(20,39);


// prectis ----------svar vadu---------

// function svar(str){
//     let count=0;
//     for( let vr of str){
//         if(vr==="a"||vr==="e"||vr==="i"||vr==="o"||vr==="u"){
//             count++;
//         }
    
//     }
//     console.log(count);
// }
// svar("urmiit");

//same whith arrow fun------------

// const svar=(str)=>{
//   let count=0;
//     for(let svr of str){
//      if(svr==="a"||svr==="e"||svr==="i"||svr==="o"||svr==="u"){
//        count++;
//        }
//     }
// console.log(count);
// }
// svar("urmit");


//for each loop like function
// let arr=[1,2,3,4,5,6,7,8,9];

// arr.forEach(function pritn(val){
//   console.log(val);
  
// });
// console.log("\n");
// arr.forEach( val=> {
//   console.log(val);
  
// });


//muliply by num sqavr karvano che solve by me -----------------------
let array=[2,3,4,5,6,7];
let sum;
array.forEach(val=> {
  sum=(val*val);
  console.log(sum);
  
});


// map type-----------------store all arey-------------

// let arr=[1,2,3,4,5,6,7];
// let ans=arr.map(sum => {
//   return sum*sum;
  
// });
// console.log(ans);


// filtre -------------------for condison

let arr=[1,2,3,4,5,6,7,8,9,10];
let ans=arr.filter((val) => {
  return val%2==0;
  
});
console.log(ans);
