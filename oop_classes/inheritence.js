
class user{
    constructor(name){
        this.name=name
    }

    greeting(){
        return `Namaste shri ${this.name} ji maharaj.`
    }
}

class people extends user{

    constructor(name,address,pincode){
        super(name)
        this.address=address
        this.pincode=pincode
    }

    SayAdd(){
        return `Your address is ${this.address}`
    }
}


const p1=new user('buttan sarkar')
console.log(p1.greeting())
//console.log(p1.address())  user cant access people ka methods but people class can access user ka methods becz extend/inherit hua hai user ka method people class me

const p2=new people('Aman',"bihar",'844126')
console.log(p2.greeting(), " || ",p2.SayAdd() )

console.log(p1 instanceof user)  //true
console.log(p2 instanceof user)
console.log(people instanceof user)  //false
console.log(p2 instanceof people)