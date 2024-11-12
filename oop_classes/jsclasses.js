

//ES6

// class customer{

//     constructor(username,email,password){  //not mandatory to write every time i.e kabhi kabhi nahi bhi rahta hai constructor

//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     //methods  --> yaha hum isko method bolte hai inside class.

//     encryptPassword(){
//        return `abc${this.password}cba`
//     }

//     ChangeNameStyle(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// //taking new object and whenever new object form then new is use --> constructor call ho jayega.

// const user1=new customer("buttan sarkar", "butn@gmail", "844126")

// //console.log(user1)

// console.log(user1.ChangeNameStyle())






//*************************  behind the scenes of above class and constructor things....********************************************

function customer(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

//ab methods ke liye bhi ek prototype define kar do...

customer.prototype.encryptPassword=function(){
    return `abc${this.password}cba`
}

customer.prototype.changeCase=function(){
    return `${this.username.toUpperCase()}`
}

const user2=new customer('aditya raj', 'ad@gmail', "123")

console.log(user2.encryptPassword())
console.log(user2.changeCase())
