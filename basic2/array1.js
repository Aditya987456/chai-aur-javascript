// const arr1=new Array(1,2,3,4,5)
// // const arr2=[1,2,3,4,5,6,7]
// // console.log(arr1)
// // console.log(arr2)


 //++++++++++++++++++++++++++++++++++++++++++++  array methods...

// // arr1.push(11,22)
// // console.log(arr1)

// arr1.unshift(24)
// console.log(arr1)
// arr1.shift()
// arr1.shift()
// console.log(arr1)
// console.log(arr1.includes(3))
// console.log(arr1.indexOf(3))

// let arr2=arr1.join()
// console.log(arr2)
// console.log(typeof arr1)
// console.log(typeof arr2)

//+++++++++++++++++  Slice   v/s   Splice   ++++++++++++++++++++

let array1=new Array(1,2,3,4,5,6,7,8,9)
console.log("Step-1 ", array1)                  // o/p no change....

let result1=array1.slice(1,5)
console.log("slice result  ", result1)                       //result of slice array [2,3,4,5]
console.log("Step-2 ", array1)                  //slice karega but orignal me no change.

let result2=array1.splice(1,5)

console.log("splice result  " ,result2)    //splice result which includes both index[2,3,4,5,6]
console.log("step-3  ",array1)

