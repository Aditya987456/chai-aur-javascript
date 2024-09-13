//both method of creating object is true but first is singleton and 2nd line is not singleton.

// const obj1=new Object()
// const obj2={}

// console.log(obj1)
// console.log(obj2)


// objects in object
let object1={
    emailid:"adityaraj987456@gmail.com",
    fullname:{
        userfullname:{
            first:"mr",
            middle:"buttan",
            last:"sarkar",
        }
    }
}

// console.log(object1.fullname.userfullname["middle"])
// console.log(object1.fullname.userfullname.middle)

// const obj1={1:"a", 2:"b"}
// const obj2={3:"aa", 4:"bb"}
// const obj3={5:"aaa", 6:"bbb"}

// const result={...obj1, ...obj2, ...obj3}
// console.log(result)

//array objects

const arr=[
    {id:1, email:"buttan@gmail.com"},
    {id:2, email:"sarkar@gmail.com"},
    {id:3, email:"aman@gmail.com"}
]

// console.log(arr[1].email)
// console.log(Object.entries(arr))
// console.log(Object.keys(arr))
 console.log(Object.values(arr))
console.log(arr.hasOwnProperty("isLoggedIn"))



//***************+++++++++         destructuring objects         +++++++++++**************/
/* important when we have to take data from react by using object destructing

also use taki baar baar dot karke access na karna pade as just use curly brackets

*/

//JSON api is mainly used during taking inputs...
//agar api hai matlab jaruri nahi ki sirf obj hi hoga arr bhi ho sakta hai.
