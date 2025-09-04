// const Demo =()=>{
//     console.log(100)
// }
// first()
// function first(){
//     console.log(300)
// }
// Demo()

// for(let i=1; i<9; i++){
//     console.log(i)
// }

// const person ={
//     name:"Aravind",
//     age:20,
//     isStudent:true,
//     greet: function(){
//         console.log("Hello iam aravind")

//     }
// }
// console.log(person["name"])
// person.greet()
function reverseString(str){
    return str.split(' ').reverse().join('');
}
console.log(reverseString("hello iam a reverse string"))
