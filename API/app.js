let url ="https://cataas.com/cat";

// let prms =fetch(url);
// console.log(prms);




// using normal functiopn ----------------------------- 


// async function getf (){
    
//     console.log("data is comming .....")
//     let respose =await fetch(url);
//     console.log(respose);
    
// }
// let s =getf();


// thi  is arrow function -------------------------------


const getdata = async ()=>{
    console.log("data is comming .....")
    let prms =await fetch(url);
    console.log(prms);
//    let data= await prms.json();         // this is use for text   .json()
let data =await prms.blob();               // this is for img        .blob()
   console.log(data);

   let img =document.querySelector("#img");
    let imgtag=URL.createObjectURL(data);
     img.src=imgtag;
}


// let button =document.querySelector("#button");
// button.addEventListener("click",()=>{
//     console.log("click");
//     getdata(); 
// })
        getdata();




//// tis is used to call function step dy step ------------------


// async function info(){
//     await getdata();
//     await getf();
// }

// let t =info();