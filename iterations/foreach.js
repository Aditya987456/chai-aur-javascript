

/*  -----------------------------------       foreach loop          -------------------------------------------. 
   
    1. we calling function inside foreach loop's syntax in which we use callback function i.e, name use 
       nahi hoga becz callback function hai na.

    2. we can also use arrow function for calling callback function in foreach loop

    3. we can also pass reference of a function in a foreach loop for callback but make sure we passes only
       reference not call there like func() just pass reference i.e, func.



*/



const fruits=["apple", "banana", "orange", "coconut"]

//1
// fruits.forEach(function(items){
//     console.log(items)
// })




//2
//fruits.forEach( (items)=>{ console.log(items)} )



//3
// function names(item){
//     console.log(item)
// }

// fruits.forEach(names)


//----------------  we can also print the index and arr using foreach loop not only just items inside array.

// fruits.forEach( (items,arr4,arr)=>{  //i.e first wala->items, 2nd->indexing, 3rd->array.
//     console.log(items,arr4,arr)
// })





//******************************************   Traversing array of objects    ***********************************/


//array of objects...

const TeamIndia=[
    { 
        playername:"Rohit sharma",
        jerseyNo:45
    },

    { 
        playername:"virat kohli",
        jerseyNo:18
    },

    { 
        playername:"MS dhoni",
        jerseyNo:7
    }
]

TeamIndia.forEach( (info)=>{
    console.log(info.playername,info.jerseyNo)} )
