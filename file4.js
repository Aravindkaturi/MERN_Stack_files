// //Closure code
// function makecounter(){
//     let count=0;//private variable
//     return function(){//inner fn
//         count++;
//         return count;
//     };
// }
// const counter=makecounter();
// console.log(counter());//1
// console.log(counter());//2

//Callback code
function greet(name,Callback){
    console.log("Hello"+name);
    Callback();
}
function int(){
    console.log("goodbye")

}
greet("Alice",int)