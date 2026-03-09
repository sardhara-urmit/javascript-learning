let body=document.querySelector("body");
let btn=document.querySelector("#btn");

let mode="light";

btn.addEventListener("click",()=>{

    if(mode==="light"){
        mode="dark";     //darm mode
        btn.innerText="light";
        body.classList.add("dark");
        body.classList.remove("light");
        btn.classList.add("lightbtn")
         btn.classList.remove("darkbtn");
         btn.removeAttribute("id");
    }
    else{
        mode="light";  // light mode
        btn.innerText="dark";
        body.classList.add("light");
        body.classList.remove("dark");
        btn.classList.add("darkbtn");
        btn.classList.remove("lightbtn");
          btn.removeAttribute("id");
        
    }
    console.log(mode);
})