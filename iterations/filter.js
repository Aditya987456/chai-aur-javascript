
/*
----------------------------------------  filter--> jo true hoga wahi o/p arr me pass hoga.   ------------------------------------------------------------

we use filter becz it returns i.e we can return arr, or any values it is used when we have to return 
then we prefer filter instead of for each loop.

since we can also return value using foreach loop if we use conditions like if ....


*/

const IndianCricketTeam=[
    
    {playername:"Rohit sharma", jerseyNo:45, nickname:"shana"},
    {playername:"Virat Kohli", jerseyNo:18, nickname:"chiku"},
    {playername:"Jasprit Bumrah", jerseyNo:93, nickname:"boom boom"},
    {playername:"MS Dhoni", jerseyNo:7, nickname:"Thala"},
    {playername:"KL rahul", jerseyNo:1, nickname:"kamal lajawab"}
    
]


// ****if we use foreach loop aise then not happens becz foreach not returns aise we have to use if conditions to store in arr then after that it will return ...

// let result=IndianCricketTeam.forEach( (players)=>(players.jerseyNo>45) )
// console.log(result)





//****aise kar sakte hai if we want ki only use foreach not filter...

// let results=[]
// IndianCricketTeam.forEach( (players)=>{ if(players.jerseyNo>45)
//     results.push(players)
// } )
// console.log(results)






//************now using filter........

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  
  //now we can easily return value without any conditions...

  let MyBooksCart=books.filter( (bk)=>bk.genre==="Science")
  console.log(MyBooksCart)








