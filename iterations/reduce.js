/*   
------------------------------------------  Reduce()  -----------------------------------------------------

when we have to add items from arr, arr of obj, just like in cart then instead of using loop we use reduce-->
that require initial val, accumulator and current value such that first time acc takes value from initial value 
after that accu have previous total val....

*/


const myArray=[1,2,3,4,5,6,7,8,9,10]



//***without using arrow func.

// let initial=0
// const result=myArray.reduce( function(accu,currVal)
//       {     console.log(`accumulator : ${accu} and current value : ${currVal}`)
//             return accu+currVal} ,initial)

// console.log(result)





//***********using arrow function....

// const ans=myArray.reduce( (acc,curval)=>acc+curval,0 )
// console.log(ans)


//----------------using on array of objects..................

const courses=[

    {  CourseName:"js",
        Price:3999
    },

    {  CourseName:"python",
        Price:2999
    },

    {  CourseName:"web dev",
        Price:4999
    },

    {  CourseName:"web3",
        Price:4999
    },

    {  CourseName:"data science",
        Price:7999
    },

    {  CourseName:"Chai aur JS",
        Price:0
    },

]

const ToatalCartAmount=courses.reduce( (acc,items)=>(acc+items.Price),0 )
console.log(ToatalCartAmount)