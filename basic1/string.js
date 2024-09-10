
/**************  string concatenation  *************/

// let str="aman"
// let val=40
// console.log(str+ val+" singh")

// console.log(`hello my name is ${str} and age is ${val}`)



/************** string as object *******/

// let str0=`aman`
// let str1=new String(`aman`)
// console.log(typeof str1)
// console.log(str1==str0)  //t
// console.log(str1===str0)  //f



/*
 string -  prototype kuch bhi lo google karo aur practice karo string 
me implement karke 
                                                                                         */

// let visit=`visit yt video chai aur code`
// let go=visit.link("https://www.youtube.com/watch?v=_KqpeDc47Ro&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=12")
// console.log(go)

// let str3=new String(`3`)
// let result=str3.startsWith(3)   //true
// console.log(result)

// let str4="buttan sarkar".toUpperCase()
// console.log(str4)

let str5=new String(`buttan sarkar`)
str5.toUpperCase()
//console.log(result)
console.log(str5)  //same str5 ki hi value ayega even if we converting in uppercase becz change copy me hua hai str5 ke na ki str5 me becz wkt string is primmitive using stack memory...


// let str6=new String(`buttan sarkar`)
// let result=str6.substring(0,8)
// console.log(result)

/********************        Slice()          v/s    substring()             ******************/

//slice()
//Negative Indices: Supports negative indices, which count from the end of the string.
//Behavior: If start is greater than end, it returns an empty string.

let str7 = "Hello, World!";
console.log(str7.slice(0, 5)); // "Hello"
console.log(str7.slice(-6, -1)); // "World"



//substring
//Negative Indices: Treats negative indices as 0.
//Behavior: If start is greater than end, it swaps the two arguments.

let str8 = "Hello, World!";
console.log(str8.substring(0, 5)); // "Hello"
console.log(str8.substring(5, 0)); // "Hello" (arguments swapped)