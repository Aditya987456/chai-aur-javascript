//singleton formed when using constructor not in literals
//object.create       //constructor wala...
//literals..........


const mysym=Symbol("key1")


let obj={

    name:"buttan sarkar",
    rollno:7,
    email:"adityaraj987456@gmail.com",
    "nick name":"Aman",
    //assigning key from symbol to value in object
    [mysym]:"kuch bhi"
    
}

console.log(obj.email)
console.log(obj["email"])
console.log(obj["nick name"])
console.log(obj[mysym])  // symbol ka jo key hai uska value hai yaha kuch bhi...

//adding function to a JS object...

obj.koi_func=function(){           //same hai jaise function banate hai hum let a=function(){}
    console.log("haanjii")
}

obj.koi_dusra_func=function(){
    console.log(`haanjii ${obj["name"]} apka paltu name hai ${obj["nick name"]} aur apka emailid hai ${obj.email}`)
}

obj.koi_dusra_func=function(){
    console.log(`haanjii ${this.name} apka paltu name hai ${this["nick name"]} aur apka emailid hai ${obj.email}`)
}


console.log(obj.koi_func())
console.log(obj.koi_dusra_func())



