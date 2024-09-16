// const obj1={
//     name:"Aditya",
//     id:7,

//     welcome:function(){
//         console.log(`helloo ${this.name} welcome to home `)
//         console.log(this)
//     }
   
// }

// // console.log(obj1.name)
// obj1.welcome()
// obj1.name="buttan sarkar"
// obj1.welcome()

//console.log(this)  //curly bracket in vscode but in console it gives---> window

// const chai=function(){
//     let username="aman"
//     console.log(this);
// }



// ---------->  function me direct use nahi kar skate this ko ye sirf context me hi kam karega i.e inside the object...

// const chai = ()=> {                        
//     let username = "sarkar"
//     console.log(this.username)
// }
// chai()







//******************       ARROW Func is simply -->  ()=>{}             */

//if curly bracket then we have to write return explicitely...

const add_num=(num1,num2)=>{
    return num1+num2
}



//if paranthesis is there then no need to write return and also help during returning objects

const add_number=(num1,num2)=>(console.log("answer is : "),
    num1+num2)




//if no paranthesis or any type of brackets ---> implicit

const add=(num1,num2)=>num1+num2


console.log(add_num(5,7))
console.log(add_number(5,8))
console.log(add(5,5))


