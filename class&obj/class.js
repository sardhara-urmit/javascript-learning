// class bmw{

//     constructor(){
//         console.log("hi im com ");
//     }

//     automatic(){
//         console.log("<-this is auto car");
//     }

//     mainule(){
//         console.log("this is mainnule car->");
//     }


//     setname( name){
//         this.name=name;
//     }
// }

// let m4=new bmw();
// m4.setname("king_m4");
// m4.automatic();
// m4.mainule();



// let m5=new bmw();




// inheritance----------     ==========     ---------

// class stdDtl{
    

//        // constructor(name ){
//        //  this.name=name ;
//        //  console.log("the name is the "+name);

//        // }


//        print(fname){
//               console.log(fname);

//        }
// }

// class facdtl extends stdDtl{


// }


// // let nmn=prompt("enter the name ");

// // let s1=new stdDtl(nmn);



// let f1 = new facdtl();
// f1.print("urmit inherit ");


class person {
       constructor(){
              console.log("hi im con ");

       }
       eat(){
              console.log("IM eting ");

       }
}

class engir extends person{
       constructor(){
              console.log("hello im eng com ");
        }

       eat(){
          console.log("hi im eat in eng ");
       }

}

let e1 =new engir();
 e1.eat();