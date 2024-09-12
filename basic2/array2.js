let num=new Array(1,2,3,4,5,6,7,8,9)
let alpha=new Array('a', 'b', 'c','d','e')
// let result1=num.concat(alpha)   //new var me lena padega becz it returns new array
// console.log(result1)

// let result2=[...alpha, ...num]    //best method to use for cocatinate arrays
//  console.log(result2)

// let newarr=[1,2,3,4,5,[11,12,13],[111,222,[1111,2222],123],0]
// console.log(newarr.flat(Infinity))

console.log(Array.isArray("buttan sarkar"))
console.log(Array.from("buttan sarkar"))

console.log(Array.from({name: "hitesh"})) // interesting ??????   --->empty becz we not declare what to do like - key pair, or .....

let A=1
let B=2
let C=3

console.log(Array.of(A,B,C))




