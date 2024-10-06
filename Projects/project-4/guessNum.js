
let randomNum=parseInt(Math.random() *100+1)
console.log(randomNum)

const submit=document.querySelector('#subt')  
const UserInput=document.querySelector('#guessField')//value yaha bhi kar sakte hai
let messageSpace=document.querySelector('.lowOrHi')

const PrevGuessSlot=document.querySelector('.guesses')
const RemainingGuessTime=document.querySelector('.lastResult')



/* startOver --->  it selects the class resultParas in which when you see the html code there is two elements i.e previous guesses and guesses Remaining.  SINCE, we resultparas becz when game end then we have to display message that start a new game and giving a BUTTON after clicking on that button user can again starts the game...
*/
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');  //use when end of game then we use to add new ele in resultparas class in html using dom...

//previousGuesses=[]   //----------?  no use??????????????????????  yess
let NoOfGuesses=0

//ye har game wale code me hoga...jab bhi false hua to game start nahi hoga..
let playGame=true







if(playGame){
 submit.addEventListener( 'click', (e)=>{
   e.preventDefault();
   const enteredGuess=parseInt(UserInput.value)
  // console.log(enteredGuess)  //------->comment kar sakte hai kya isko??????
   validateGuesses(enteredGuess)
  
 })
}



function validateGuesses(guessNum){

 if(isNaN(guessNum)){
   alert('Please enter a valid number')
 }
 else if(guessNum<1){
   alert('Please enter a number greater than 1')
 }
 else if(guessNum>100){
   alert('Please enter a number less than or equal to 100')
 }
 
 else{
   // previousGuesses.push(guessNum)

   if(NoOfGuesses===9){

     //-----------------------My new addition...
     if(guessNum===randomNum){
       updateGuess(guessNum)
       displayMessage(`you guessed it right, YOU WON!`)
       endGame()
     }else{
       updateGuess(guessNum)
     displayMessage(`Game Over!, Random number was ${randomNum}`) //some good message----->?????????????????????????
     endGame()
     }
     //---------------



     // updateGuess(guessNum)
     // displayMessage(`Game Over!, Random number was ${randomNum}`) //some good message----->?????????????????????????
     // endGame()

   }
   else{
     updateGuess(guessNum)
     CheckGuess(guessNum)
   }
 }
}





function CheckGuess(guess){
 if(guess===randomNum){
   displayMessage(`you guessed it right, YOU WON!`)
   endGame()
 }
 else{
   if(guess>randomNum){
     displayMessage(`your guess is tooo HIGH`)
   }else if(guess<randomNum){
     displayMessage(`your guess is tooo LOW`)
   }
 }
}



function updateGuess(guessN){
 UserInput.value=''
 PrevGuessSlot.innerHTML+=`${guessN}, `
 NoOfGuesses++;
 RemainingGuessTime.innerHTML=`${10-NoOfGuesses}`
}





function displayMessage(messages){
 messageSpace.innerHTML=`<h2>${messages}</h2>`  //isko bhi font chnage kar sakte hai...
}




function endGame(){

 UserInput.value=''
 UserInput.setAttribute('disabled','') //ab ager hum input wale pe click bhi karenge to nahi lega wo becz ab wo disabled hai aur uske under '' hai

 p.classList.add('buttonNew')  //it add a class-> "button" not soo use....
 
 p.innerHTML= `<button  id='newGame'> START NEW GAME </button>`  



 startOver.appendChild(p)  //tabhi to add hoga element p jo humne new banaya hai with prev guesses and guesses remaing ke niche...

 playGame=false
 newGame()
}



function newGame(){

 const newGameStart=document.querySelector('#newGame')
 newGameStart.addEventListener('click', (ev)=>{
   // ev.preventDefault();
   messageSpace.innerHTML=''  //my own addition.
   randomNum=parseInt(Math.random() *100+1)
   NoOfGuesses=0
   previousGuesses=[]
   PrevGuessSlot.innerHTML=''
   RemainingGuessTime.innerHTML=`${10-NoOfGuesses}`
   UserInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame=true

 })

}

document.addEventListener('DOMContentLoaded', (event) => {
  const creditLine = document.getElementById('credit-line');
  creditLine.innerHTML = `Made with 💚 by <a href='https://www.linkedin.com/in/aditya-raj-006978250/' > 🙋‍♂️ </a>`
});







