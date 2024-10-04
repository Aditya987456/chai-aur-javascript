const clock=document.getElementById('clock')

//if tolocaldatestring  --> ye local date de dega...
// console.log(time.toLocaleTimeString())

setInterval( ()=>{
  let time=new Date()
  clock.innerHTML=time.toLocaleTimeString()},1000)