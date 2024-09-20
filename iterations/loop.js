//for loop 1-10 
//ctrl+ d duplicate selected in codes



//for loop...
//table from 1 to 20

for(let i=1; i<=20; i++){


//continue............................................
    if(i==5){
        console.log(`5 ke table ko hi skip karna tha aage badho.\n`)
        continue;
    }


    for(let j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
    console.log("\n")


//break............................................................
    // if(i==5){
    //     console.log(`5 ke table tak hi print karna tha ab stop.`)
    //     break;
    // }

}
