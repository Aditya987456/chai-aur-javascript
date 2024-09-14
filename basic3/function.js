//sum function

// function sum(num1,num2){
//  return num1+num2
//     // console.log(num1+num2)
// }


// let num1=2
// let num2=5

// //result=sum(num1+num2) // this is wrong when console.log is there in the function
// // sum(num1,num2)         //this is correct method

// ans=sum(num1,num2)
// console.log(ans)


//***************** login user func */

// function user_login(username = "sam"){  //ab kam se kam "sam" itna to naam dena padega khali string ka problem khatam...

//     if(!username){
//         console.log("invalid, please enter user name")
//         return
//     }

//     return `${username} is just loggedIn`
   
//}

//console.log(user_login("k"))         //calling

// let result=Boolean()  //kab kab true or false hote hue jayega wo hai yeee.
// console.log(result)









// ****************shopping cart

// //function shopping_cart(...num){
// function shopping_cart(val1,val2, ...num){ //pahla two value argument ka val1 and val2 me jayega

//     return num
// }

// // const arr=(shopping_cart(100,200,300,400))
// // console.log(typeof arr)
// // console.log(arr)

// console.log(shopping_cart(100,200,456,44456))


/*******************       Handling object in function     **************/

// const user={
//     name:"buttan",
//     prices:456
// }

function cartprice(objUser){
    console.log(`hello ${objUser.name} your cart price is ${objUser.prices}`)  
}

//+++++  we can also directly gives obj inside function argument during calling.




cartprice({
    name:"sarkar",
    prices:852
})


//  +++++++ handling array..........

const arr=[12,36,14,786,459]

function return2nd_ele(arrs){
    return arrs[1]
}

let result=return2nd_ele(arr)
console.log(result)




