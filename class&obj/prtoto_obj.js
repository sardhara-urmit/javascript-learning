const game={ 
    gname:"urmit",
    kills:99,
    //  abc:()=>{
    //       console.log(game.gname);           // this is arrow fun but ..... 
    // },

    // abc :function(){
    //     for (const key in game) {            // tadka loop
    //            console.log(key,game[key]);
    //     }

    //          console.log(this.gname);             // this is normal fun 

    // }

    abc(){
        console.log(this.gname,this.kills);        //best for the in obj
    }
};


const ffgmame={
    kills:99,
    gname:"king"
}
// game.abc();
ffgmame.__proto__=game;



const dtl ={
    nname:"urmitt",
     age:199,
     print(){
        console.log(this.nname,this.age)


     }
}


const secondDtl={
    nname:"king",
    age:20

}

secondDtl.__proto__=dtl;