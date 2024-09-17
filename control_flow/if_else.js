//                -----------Find the grade for input marks--------------

function findgrade(num,name){
    if(num>=90){
        console.log(`congrats ${name} , you passed exam with 'A' Grade`)
    }

    else if(num>=80  &&  num<90){
        console.log(`congrats ${name} , you passed exam with 'B+' Grade`)
    }

    else if(num>=70  &&  num<80){
        console.log(`congrats ${name} , you passed exam with 'B' Grade`)
    }

    else if(num>=60  &&  num<70){
        console.log(`congrats ${name} , you passed exam with 'C+' Grade`)
    }

    else if(num>=50  &&  num<60){
        console.log(`congrats ${name} , you passed exam with 'C' Grade`)
    }

    else if(num>=40  &&  num<50){
        console.log(`congrats ${name} , you passed exam with 'D' Grade`)
    }
    else{
        console.log(`dear ${name} sorry , you have failed the exam. try again`)
    }
}

findgrade(79.9,"Buttan sarkar")