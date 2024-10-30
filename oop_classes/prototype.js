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






/******************INHERITANCE  -> old  & new syntax.   ********************/

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

//bahar bhi likh sakte hai.... like this  it means  --> teacher inherit from user.

Teacher.__proto__ = User

// ********************************   modern syntax  of inherit         -----------------   

Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TASupport.isAvailable)  //here we are using inheritance method of teaching support in TASupport..



