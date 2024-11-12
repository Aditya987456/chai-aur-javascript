function additself(num){

    return num+num;
}

additself.power=40;

console.log(additself.power)
console.log(additself.prototype)  //i.e function also object.



function createshop(items,price){
    this.items=items
    this.price=price
}

//making a new method that go to prototype me matlab agar humne object me hi naya method de diya matlab
//sablog i.e function,objects,arr, etc ye sab bhi access kar sakte hai becz sab log to object hi hai na....

createshop.prototype.printinfo=function(){
    console.log(`price is ${this.price}`)
}

//new obj
const shop1=new createshop('chai', 25)
const shop2=new createshop('coffee', 200)

shop1.printinfo()
//shop1.prototype.printinfo()   har samay prototype likhne ki koi jarurat nahi hai wo JS dekh lega.


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/




// ***************************  prototype

let myName = "hitesh     "
let mychannel = "chai     "



//ye hamne naya method banaya hai aur ye object me inject h,,  i.e koi bhi string isko access kar sakta hai becz. string object hai in JS.

String.prototype.trueLength = function(){
    console.log(`${this}`);   //string ka name jo isko call kiya hai.
    console.log(`True length is: ${this.trim().length}`);
}


console.log(myName.trueLength());
"buttan sarkar".trueLength()





let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects jo hai i.e ${this.thor} and ${this.spiderman}`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}


// $$  array or object dono ke prototype me new method inject kar rahe hai aur jo raha hai kaha -->object ke method me and we know that 
//      ki array,func,obj ...etc  sab JS me object hi hote hai then ye sab log naya banaya hua method ko access kar sakte hai...

//array and obj dono access kar rahe hai....
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
heroPower.heyHitesh()









//inheritance in old school...



const User = {
    name: "aman",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   //pahle aise hi inheritance hota tha i.e TASupport inherit from TeachingSupport.
}

//bahar bhi likh sakte hai.... like this  it means-> teacher inherit from user.

Teacher.__proto__ = User

// modern syntax  of inherit---------------------------------------------------------------

Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TASupport.isAvailable)  //here we are using inheritance method of teaching support in TASupport..


// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()

// "hitesh".trueLength()
// "iceTea".trueLength()



