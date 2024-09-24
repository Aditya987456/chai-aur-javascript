//-------------------------------------- for of(){} loop------------------------------------------



// const arr=[1,2,3,4,5,6,7,8,9]

// for (const num of arr) {
//     console.log(num)
// }



//------------------  M A P S -> object which holds key value pairs in a order it came. any val used as either key or value.    ---------------------------
 
let map1=new Map()
map1.set('IN','India')
map1.set('EN','english')
map1.set('CSK','chennai')
map1.set("kkr",'kolkata')

//console.log(map1)             //isse pura map aa jayega



//using loop forof

// for(const [key,value] of map1){  
//     console.log(key, '=', value)
// }





//------------------------------------------------------------------------
//now above line is not valid when we use with object

// const myobject={
//     'player1':"hitman",
//     player2:'thala',
//     "player3":"king"
// }

//using loop forof -----> gives ERROR

// for(const val of myobject){  
//     console.log(val)
// }



//-----------------------------       For in(){}  loop ----------------------------------------------
//iterates over keys of an object,arr...

const myobject={
        'player45':"hitman",
        player07:'thala',
        "player18":"king"
    }

    for (const key in myobject) {
        console.log(`key is : ${key} and its value is : ${myobject[key]}`)
    }

//on array it gives key i.e, index

const myname=["buttan", "sarkar", "aditya", "raj"]
for (const key in myname) {
    console.log(key)
}