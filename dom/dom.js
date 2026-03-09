// console.dir(document.body);
// console.log(document.body);
// document.body.style="background:red";
// let dom=document.getElementById("header");
// console.dir(header);
// let dd=document.getElementsByClassName("child");
// console.dir(dd);
// let pargraph=document.getElementsByTagName("p");
// console.dir(pargraph)

// let qSelect=document.querySelector("div"); // select first child
// console.dir(qSelect);
// let qSelAll = document.querySelectorAll("div");  //select all child
// console.dir(qSelAll);


// let xy=document.getElementsByTagName("h1");
// console.dir(xy);

// let ac=qSelAll.tagname;
// console.dir(qSelAll);

// let boxx=document.querySelectorAll(".box");
// console.dir(boxx);

// boxx.forEach(box => {
//     box.style.background="blue";
     
        
// });



// boxx.style.backgroundColor="red";
// boxx[0].style.backgroundColor= "red";
// boxx[1].style.backgroundColor="black";
// boxx[2].style.backgroundColor="pink";







// atribute  get ------------
// let atr= document.querySelector("#hell");
// console.log(atr);

// let atrr= atr.getAttribute("id");
// console.log(atrr);

// let fname=atr.getAttribute("name");
// console.log(fname);

// //----
// let cls=document.querySelector(".cls");
// console.log(cls.getAttribute("class"));

// console.log(cls.setAttribute("class","king"));


// node style 

// let dbox=document.querySelector(".boxx");

// dbox.style.backgroundColor="red";




// add new aliment ------------

// let btn=document.createElement("button");
// console.dir(btn);
// btn.style.backgroundColor="pink";
// btn.style.marginLeft="15px";
// btn.innerText="click me ";
// btn.style.borderRadius="5px";
// let div=document.querySelector(".boxx");
// div.append(btn);
// div.prepend(btn);
// div.before(btn);
// // div.after(btn);


// // --------------
// let hd=document.createElement("h1");
// hd.innerText="hello im new hadind by js ";
// console.log(hd);

// let DivH1 = document.querySelector("body");
//  DivH1.prepend(hd);



//  let bx=document.createElement("button");
//  bx.innerText="click me";
//  console.log(bx);

//  let ax=document.querySelectorAll(".box");
//  console.log(ax);
//  ax[0].append(bx);
 
//  ax.forEach(lop => {
//     lop.append(bx);
    
//  });


///       remov node (eliment)       ---
 
// let bx=document.querySelector(".boxx");
// bx.remove();



// add 2 class in one main class   prectis 2 ------------------
let con=document.querySelector(".content");
console.log(con);   
con.style.borderRadius="20px";
con.style.boxShadow="3px 3px 3px black";

con.classList.add("newcon");