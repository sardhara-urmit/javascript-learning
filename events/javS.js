// // js external is the  more power full then in line ----
// // but this is the handel only one events------

// let btn1=document.querySelector("#btn1");
// btn1.onclick = (evt)=>{
//     console.log("hello",evt);
//     console.log(evt.type);  
//     console.log(evt.target);
// };


// let btn2=document.querySelector("#btn2");
// btn2.ondblclick =(evt)=>{
//     console.log("hello",evt);
    
// };



let btn3=document.querySelector("#btn3");
let bodyy=document.querySelector("body");
btn3.onmouseover=(e)=>{

//     // console.log("hello");
//    for(let i=0;i<=10;i++){
//     console.log(`hover${i}`);
//                     }
console.log(e.target);
console.log(e.type);
bodyy.style.backgroundColor="red";


}


// // smart and wideli using --- for multipule events--

let s2btn1=document.querySelector("#s2btn1");
s2btn1.innerText="click me 1X or 2x ";
// console.log(s2btn1);



// for rmove the event use the variabel  
let evnts=()=>{                            //
                                            //
    console.log("hello");                    //
    body.style.backgroundColor="green";
                                     
}                                                    //

                                                        //
s2btn1.addEventListener("click",evnts);

s2btn1.addEventListener("dblclick",()=>{

    body.style.backgroundColor="yellow";            //
})


// remove the events (function)                        
                                                   //
// s2btn1.removeEventListener("click",evnts);      





// //----- prectis for changing the mode my button like togele

let modee=document.querySelector("#mode");
console.log(modee);
let= crtmode="light";
                                                            // this is the work but using the class 
let bodys =document.querySelector("body");
modee.addEventListener("click", () =>{
    
   if(crtmode==="light"){
      crtmode="dark";
      bodys.style.backgroundColor="black";
   }
   else{
    crtmode="light";
    bodys.style.backgroundColor="white";
   }
   console.log(crtmode);
});


// using the class dark and light 

let mode =document.querySelector("#mode");
let body= document.querySelector("body");

let crntmode="light";

mode.addEventListener("click",()=>{
    if(crntmode=== "light"){
        body.classList.add("dark");
        body.classList.remove("light");
        mode.innerText="light";
        crntmode= "dark";
    }
    else{
        body.classList.add("light");
        body.classList.remove("dark");
        mode.innerText="dark";
        crntmode="light";
    }
    console.log(crntmode);
    
})


