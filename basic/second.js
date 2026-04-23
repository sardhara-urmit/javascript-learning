// alert("hello gat king");
// let war=prompt("hello king ");
// console.log(war);

let a=2;
let b=3; 

console.log("a + b = ",a + b );
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a ** b =",a**b); //sqvar mate a no sqvar 2*2*2=8
a+=4;
console.log("a+=4 = ",a); //a=a+4
console.log("a==b",a==b); // bolian
let k=5;
let p="5";
console.log("k==p",k==p); // this is true because this this convert string into number solve with ===
console.log("k===p",k===p); //fix it 


//logikal oprator  ----------------------------------------------------------------------------




let u=10;
let s=11;
let com = (u==s);
let les =(u<=s);
console.log("com && les= ",com && les);

//condison  ----------------------------------------------------------------------------------------


let r=10;
if(r==10){
    console.log("yes");
}

else{
    console.log("no");
}



//tornory ----------------------------------------------------------------------------------------------
let age=19;
let turnary =age >=18 ? "adult":"not adult";
 console.log(turnary);

//  work -----------------------------------------------------------------------------------------------
// let num = prompt("enter the num");

// if(num % 5 ==0){
// console.log(num,"is divided by 5 ");
// }
// else{
//     console.log(num,"not divided");
// }
//------   2    ---------------------------------------------------------------------------------------

let stud = prompt("enter marks ");

if(stud>=90 && stud<=100)
    {
    console.log("a");
}
else if (stud>=80&&stud<=89)
    {
    console.log("b");
}
else if (stud>=70 && stud <=79)
{
    stud="c";   //new unik 
}
else{
    stud="haf";
}
console.log(stud);        //new uink 