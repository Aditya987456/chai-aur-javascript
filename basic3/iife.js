// ..................   IIFE --> immediately invoked function expression   ................

//when we required a function that needs immediate invoke then we use this and also we use --> when global scope ke pollution se problem hota hai then global jo variable hai uske pollution ko hatane h=ke liye.


//some examples of iife...

//eg-1

(function add(a,b){
    console.log(a+b)
})(2,8);




//example-2

(function greeting(){
    console.log("Namste sirji")
})();



//example-3  ----> we can store in variable also...

const value=(function add(num1,num2){
    return num1+num2
})(7,13)

console.log(value);        //matlab next iife use karne se pahle jo bhi ho usme semicolon hona chahiye.



//example-5  ---------------->  *****  ARROW FUNCTION  ******

(()=>{console.log("arrow use kar riya hu...")})();

//example--6   ====  if there is a console.log which accept variable also then....also arrow fn

( (name)=>{
    console.log(`my name is : ${name}`)
}  )("buttan sarkar")
