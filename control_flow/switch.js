//                -----------Find the grade for input marks--------------


//note- since if we will not put break then it will print all when condition meet upto default but not the default...

function findgrade(num,name){
    const number=num

    switch(true){   //true becz >= ye sab case me allow nahi hota hai...

        case (number>=90):
            console.log(`Congrats ${name} you have passed the exam with "A" Grade `)
            break;

        case (number>=80):
            console.log(`Congrats ${name} you have passed the exam with "B+" Grade `)
            break;

        case (number>=70) :
            console.log(`Congrats ${name} you have passed the exam with "B" Grade `)
            break;

        case (number>=60):
            console.log(`Congrats ${name} you have passed the exam with "C+" Grade `)
            break;

        case (number>=50) :
            console.log(`Congrats ${name} you have passed the exam with "C" Grade `)
            break;

        case (number>=40) :
            console.log(`Congrats ${name} you have passed the exam with "D" Grade `)
            break;

        default: console.log(`Sorry ${name} you failed. try again...`)
            break;
        
    }
}

findgrade(75,"abc")
