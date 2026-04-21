function hello (){
    console.log("hello asyn");
}
setTimeout (hello,2000);

setTimeout(() => {
    hello();
}, 3000);