
// -----------------  promise-1  --------------------------------------

const promise=new Promise((resolve,reject)=>{

    //async task.
    setTimeout( ()=>{
        console.log("async task-1 completed")
        resolve(100)
    },1000)
    
} )
promise.then((hii)=>{
    console.log(`task-1 resolve ho gaya ${hii}% \n`)

})




// -------------------------------  promise-2  -------------------------------
//directly create promise and write .then()
new Promise((resolve,reject)=>{
    setTimeout( ()=>{
        console.log(' task-2 is completed')
        resolve()
    } ,1000)
} ).then((message)=>{
    console.log('task-2 is resolved \n')
} )


console.log('hii i am synchronous task')
console.log('\n')




// -------------------------------  promise-3  -------------------------------
// ** ham jo pass karenge resolve me wo then me ayega .

const p=new Promise((resolve, reject) => {
    setTimeout( ()=>{
        console.log(`task-3`)
        resolve({name:'buttan sarkar', class: 'btech cse', email:'buttansarkar@gmail.com'})
    } ,1000)
}).then((userinfo)=>{
    console.log(userinfo)
} )




// -------------------------------  promise-4  -------------------------------

new Promise((resolve, reject) => {
    setTimeout( ()=>{
        let err=true;

    if(!err){
        resolve({name:'aditya raj', class:'btech', lang:'JS' })
    }else{
        reject('ERROR : kuch to gadbad hai')
    }

    },1000)

})
//this is called then chaining
.then((userDetails)=>{
    console.log(userDetails);
    return userDetails.lang
})
.then((userinfo)=>{
    console.log(userinfo)
    return 'done'
})
.then((message)=>{
    console.log(message)
})
.catch( (err)=>{
    console.log(err)
})
.finally( ()=>{
    console.log('something happened either resolved or rejected\n')
})





// -------------------------------  promise-5  -------------------------------
//handling promises with async await using try-catch...

const promise5=new Promise((resolve, reject) => {
   setTimeout(()=>{
    let err=true
    if(!err){
        resolve({name:'promise5', method:'aync await', handling:'try catch'})
    }else{
        reject('ERROR5 : something is wrong')
    }
   },1000)
})

async function consumePromise5() {
try{
    const response=await promise5
    console.log(response)
    }catch(err){
        console.log(err)
    }
}

consumePromise5()



//*********     handling promises with async await using try-catch...       ************/

async function consumepromise6() {
    try{
       let result=await new Promise((resolve, reject) => {

        setTimeout(()=>{
            let error6=false
        if(!error6){
            resolve({name:'promise6',method:'async await'})
        }
        else{
            reject('ERROR:error of promise6')
        }

        },1000)

       })
//****************************   vvi *********************************************** */
       console.log(result)//*********************this line only run when promise resolved

    }
    catch(err){
        console.log(err)
    }  
}
consumepromise6();






/********************************   fetch() using in try-catch    ***********************/

async function getUserDetails() {
    try{

    let result=await fetch('https://api.github.com/users/hiteshchoudhary')
    //converting result in json becz fetch gives in raw or string and we convert it in json->js object notation
    
    const data=await result.json()  //here result ko json me convert hone bhi time lag sakta hai .so, use await
    console.log(data)

    }
    catch(err){
        console.log('ERROR : ',err)
    }
}

//getUserDetails()



//*******************************  fetch() using -> then(),catch()   ****************************/

//yaha pe await ye sab ka tension nahi hai jab tak pahle .then() complete nahi hoga tab tak dusra nahi chalega.
//direct fetch likho becz we know that it will return a promise then do all operations


fetch('https://api.github.com/users/hiteshchoudhary')

.then( (result)=>{
    return result.json()  //***  convert to yaha bhi karna hi padega json me. */
    
})
.then( (data)=>{
    console.log(data)
})

.catch( (err)=>{
    console.log('ERROR : ',err)
})
