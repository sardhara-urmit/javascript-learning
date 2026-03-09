let h2= document.querySelector("h2");

console.dir(h2.innerText);
h2.innerText=h2.innerText+"hello";


let hh=document.getElementById("header");
// console.dir(hh.innerText);
hh.innerText=hh.innerText+" umit ";



let dd=document.querySelectorAll(".box");
console.dir(dd[0].innerText);

// dd[0].innerText="urmit";
// dd[1].innerText="sardhara";
// dd[2].innerText="the king ";

let idx=1;
 for (const divv of dd ){
    divv.innerHTML=`urmit ${idx}`;
    idx++;
    
 }
 let arr;
 dd.forEach(arr ,idx=> {
   arr.innerHTML=`helllllllllllo${idx}`;
 });