/*********************************       NUMBER           ********************************/



// let num = new Number (5.123456);
//--------------------------- precision------------------------------

// console.log(num.toExponential())
// console.log(num.toPrecision()) // '5.123456'
// console.log(num.toPrecision(5)); // '5.1235'
// console.log(num.toPrecision(2)); // '5.1'
// console.log(num.toPrecision(1)); // '5'

// const nums=123.456
// let result=(typeof nums.toPrecision(4))
// console.log(result)
// console.log(nums.toPrecision(1))      //1e+2
// console.log(nums.toPrecision(2))        //1.2e+2
// console.log(nums.toPrecision(4))

// let nums=10000000
// console.log(nums.toLocaleString('en-IN').length)



/*****************************-----       MATHS     -----**************************************/

// console.log(Math.abs(-9))
// console.log(Math.PI)
// console.log(Math.ceil(7.1))
// console.log(Math.floor(12.9))
// console.log(Math.random())

//if we want [1,10]

console.log(Math.floor(Math.random()*10) + 1) 

//formula se

const min=20
const max=40
//such as ---->  [20,40]  //both includes

result=Math.floor(Math.random()*(max-min+1)+min)
console.log(result)