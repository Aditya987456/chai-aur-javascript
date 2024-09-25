/*

---------------------------------------     M  A  P     ---------------------------------------------


when we want to transform each ele of array.

 */

const Myarr=[1,2,3,4,5,6,7,8,9,10]
// let result=Myarr.map( (elements)=>elements*10)
// console.log(result)






//------------------------   CHAINING -> using multiple methods in one array   ------------------------------------------------

let answer=Myarr.map( (num)=>num*10).map( (num)=>num+10).filter( (num)=>num>50)
console.log(answer)