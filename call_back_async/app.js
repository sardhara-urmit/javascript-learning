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





// callback --------------
 
 
 
 

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


// call data step by step by useing nested call
function database(data,nextdata){
    
    setTimeout(() => {
        console.log("the data is ",data);
        if(nextdata){
            nextdata();
        }

    }, 2000);
}

database(1,()=>{
    database(2,()=>{
    database(3)
})
});