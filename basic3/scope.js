// // **global scope
// let a=100


// if(true){
//     //**block scope
//     let a=23
//     console.log("inner wala a ka value :",a)
// }
// console.log(a) 



// function one(){
//     const name1="buttan"
//     console.log("pahla func --> one")
//     function two(){
//         console.log(name1)
//     }
//     console.log("2nd funct implement hone se pahle")
//     two()
// }
// console.log("pahla imple hone se pahle...")
// one()

console.log(add_one(4))   //here also possible to access before declaration 
function add_one(num1){
    return num1+1
}
console.log(add_one(4))




//here cant access before declaration...
const add_two=function(num2){
    return num2+2
}
console.log(add_two(8))
