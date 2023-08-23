var container = document.querySelector(".mygrid");
var clear = document.querySelector("#clear");
var colors = document.querySelector("#colors");


for(var i = 0; i<256; i++){
    var div = document.createElement("div");
    div.classList.add("squares");
    container.appendChild(div);
}

var squares = document.querySelectorAll(".squares");

for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("mouseover", (e)=>{
        // e.target.classList.add("color");
        e.target.style.background = colors.value;


      
        
    })
}

clear.addEventListener("click", ()=>{
   for(var i=0; i<squares.length;i++){
    squares[i].style.background = 'white';
   }

   console.log(colors.value);
    
})







