const userEmail=[]

if(userEmail){
    console.log("got usergmail")
}else{
    console.log("Don't get user gmail")
}



// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// "0", 'false', " ", [], {}, function(){}


//*****************finding empty function...
// if(userEmail.length===0){
//     console.log("array is empty")
// }

//*****************    finding object is empty 

// const obj={ }

// if(Object.keys(obj).length===0){
//     console.log("object is empty")
//}

// --------------------     Nullish Coalescing Operator(??): used on null,undefined

// const val1=null??56  //yaha 56 ke jagah pe koi function hoga jo DB se value call karega aur agar value nahi aya agar kuch problem hai to null le ke aage badh jayega...koi problem nahi hoga code me........

// const val2=null??10??50


// //---------------  Ternary operator.

// const number=97
// 97>90? console.log("grade 'A' "):console.log("grade 'B' ")


