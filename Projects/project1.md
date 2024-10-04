
# Project-1 : Background color changer

Project related to DOM using Javascript, CSS and HTML. In which when we click on the color block then the background color of the page is converted to that color of block where we clicked.


---
## **Project Sample**
> [project link]()

https://github.com/user-attachments/assets/1895d1ae-4d95-4593-9041-753aee0d868f



<video controls src="Screen Recording 2024-10-02 204529.mp4" title="Title"></video>








# *Solution code*


>Javacript code 

```  Javascript
console.log('DOM project-1')
const block=document.querySelectorAll('.button')
const page=document.querySelector('body')

// console.log(block)
// console.log(page)



block.forEach( (butn)=>{
  //console.log(butn)
  butn.addEventListener('click', function(ev){
    // console.log(ev)
    //  console.log(ev.target)
    

    if(ev.target.id==='grey'){
      page.style.backgroundColor=ev.target.id
    }

   //using switch.

   const color=ev.target.id

   switch(color){


    case 'grey':
        page.style.background=color;
        break;
 
    case 'white':
        page.style.background=color;
        break;

    case 'blue':
        page.style.background=color;
        break;

    case 'yellow':
        page.style.background=color;
        break;

    default:
      // page.style.backgroundColor='red';
      break;
   }
  } )
} )

```

---

> CSS code
```css

html {
    margin: 0;
  }
  
  span {
    display: block;
  }
  .canvas {
    margin: 100px auto 100px;
    width: 80%;
    text-align: center;
  }
  
  .button {
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
  }
  
  #grey {
    background: grey;
  }
  
  #white {
    background:white;
  }
  #blue {
    background: blue;
  }
  #yellow {
    background: yellow;
  }
  
```
---

>HTML code

```HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body id="body">
    <!--
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
  -->

    <div class="canvas">
     
      <h1>Background Color Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```


