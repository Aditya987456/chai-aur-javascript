// let mydate=new Date(2024,8,11,7,58)

// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());      //yyyy-mm-dd with....
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());  //mm-dd-yyyy   time

// console.log(mydate.toString())
// console.log(mydate.toLocaleString())

let mycreateddate=new Date("09-11-2024")
// console.log(mydate.toLocaleString())

let mytime=Date.now()
console.log(mytime);  // milisec time from 1970
console.log(mycreateddate.toLocaleString())   
console.log(mycreateddate.getTime())   //milisec time from created date i.e 11 sept

//now we can compare both of this


let datenew=new Date()
console.log(datenew.getDate())
console.log(datenew.getDay());
console.log(datenew.getMonth()+1);
console.log(datenew.getMilliseconds());

datenew.toLocaleString('default',{
    weekday:"long",
})

///notesssssssssssssssssss--some imp point
