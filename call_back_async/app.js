// async--------------------------









// function hello (){
//     console.log("hello asyn");
// }
// setTimeout (hello,2000);

// setTimeout(() => {
//     hello();
// }, 3000);



// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("end");
// }, 2000);

// console.log("three");





// //callback --------------
 
 
 
 

// function sum (a,b){

//     // console.log(a+b);

// }
// function callback (a,b,sumcall){
//     sumcall(a,b);

// }
// // callback(1,2,sum); 
// callback(1,2,(a,b)=>{
//     console.log(a+b); 
// })


//  // call data step by step by useing nested call  

// function database(data,nextdata){
    
//     setTimeout(() => {
//         console.log("the data is ",data);
//         if(nextdata){
//             nextdata();
//         }

//     }, 2000);
// }

// // this i the call back hell
// database(1,()=>{
//     database(2,()=>{
//     database(3)
// })
// });




// // promies for solve call back hell --------------------------


// let prms =new Promise((resolve ,rejet)=>{
//     console.log("hello promies");
//     // resolve("all is done "); 
//     rejet("this is rejected ");


// })


// function getdata(data,nextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("thi is the data",data);
//             resolve("done ");
//             if(nextdata){
//                 nextdata();
//             }
//         }, 5000);
        
//     })

// }





// //promis.then and catch--------------------



// function test(){
//     return new Promise((resolve,reject)=>{
//         console.log("run prms");
//         // resolve("succes");  
//         reject("this is fail");

//     });
// };

// let promis = test();
// promis.then((res)=>{
//         console.log("promies is done ",res);
// });

// promis.catch((d)=>{
//     console.log("not succes ",d);
// })


// // use promies is real time with dom


let h1 =document.querySelector("#h1");



function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
             h1.innerText=(`data is ${data}`);
        
        resolve("this is done ");
        }, 2000);
    })
}

let prms =getdata(1);
prms.then(()=>{
    console.log("done");
});