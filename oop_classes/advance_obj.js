const descriptor=Object.getOwnPropertyDescriptor(Math, "PI") //math obj ke jo property hai "PI" uska descriptor bata raha hai...

console.log(descriptor)
// {
//     value: 3.141592653589793,
//     writable: false,    -->  can't override.(write anything or change value)
//     enumerable: false,  --> can't apply iteration 
//     configurable: false --> not capable of being arranged or organized. 
//   }




//we can also create our own descriptor property of our object like..

const student={
    studentName:"buttan sarkar",
    rollNo:7,
    branch:"CSE"
}

console.log(Object.getOwnPropertyDescriptor(student, "rollNo"))


// {   value: 7,
//      writable: true, 
//      enumerable: true, 
//      configurable: true
//  }



//now we want that my rollNo is not writable.

Object.defineProperty(student,"rollNo",{
    writable:false,
})

console.log(Object.getOwnPropertyDescriptor(student, "rollNo"))

// {   value: 7,
//     writable: false,
//     enumerable: true,
//     configurable: true }


console.log(student)

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//  NOTE -  this are the advance thing is learn not just reading from browser. for advance knowledge just build 
//         things from your own ,stuck in problems and research and learn advance things  like this which   can  
            // be asked in mainly sde-2/3 interview...





//--------------------------------------  CLASS IMPORTANT NOTES -> REVISE IT.  --------------------------------

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// // console.log(descripter);

// // console.log(Math.PI);
// // Math.PI = 5
// // console.log(Math.PI);

// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,

//     orderChai: function(){
//         console.log("chai nhi bni");
//     }
// }

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     //writable: false,
//     enumerable: true,
    
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
        
//         console.log(`${key} : ${value}`);
//     }
// }