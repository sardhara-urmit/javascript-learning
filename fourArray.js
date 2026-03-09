// let marks=[10,11,12,13,14];
// let herros=["ironman","thor","hulk","saktiman"];

// for(let i=0;i<herros.length;i++){
//     console.log(herros[i]);
// }
// console.log("\n");

//for of loop----------------------------------------------------------

// for(let item  of herros){
//     console.log(item);
// }

//---------------                     --------------------------

// let city=["rajkot","gondal","kolithad","ahemdabad","mumbai"];
// for(let capcity of city){
//     console.log(capcity.toUpperCase());
// }


//prctis---------------------------------------------------------------

// let num=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for( let total of num){
//     sum=sum+total;
// }
// console.log(sum);
// console.log(num.length);

// let final=sum/num.length;
// console.log(final);


//prectis 2--------------------------------------------------------



             //--------with for of loop----------------------
// let prize=[100,200,300,400,500];
// let i=0;               
// let sum;
// for(let dPrice of prize){
//     console.log(`the index is the ${i} = ${dPrice}`)
//  sum=dPrice/10;
//  prize[i]=prize[i]-sum;
//  console.log(`the discount is ${sum}`)
// console.log(`after offer is ${prize[i]}`);
// i++;
// }


//       -------  whith for loop---------------------

// let prize=[100,200,300,400,500];
// let i;
// for(i=0;i<prize.length;i++){
//     let sum=prize[i]/10;
//     console.log(`the discount is ${sum}`);
//      prize[i]-=sum;
//      console.log(`discounted prize ${prize[i]}`);
// }
// console.log(`discounted prize ${prize}`);
 


// array methof--------------*******************88-------------------------

// let food=["banna","mango","orange"];
// console.log(food);
// food.push("kela");    // add item to end and---unshift is add to start ma add kare
// console.log(food);
// food.pop();
// console.log(food.toString());          //array to sting------

//=--------------concat-----------  

// let mhero=["iorn","hulk","spider"];
// let dhero=["super","bat"];
// let ind=["sakti","kris"];

// let all=mhero.concat(dhero,ind);
// console.log(all);

//prectis --------------------------------------


let com=["blomber","microsoft","uber","google","ibm","netflix"];
com.shift();
console.log(com);
console.log(com.splice(1,1,"ola"));
console.log(com);
com.push("amzon");
console.log(com);