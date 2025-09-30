const body = document.body;
const btn = document.getElementById("btn");
const mostrar = document.getElementById("mostrar");

btn.addEventListener("click", ()=>{
   
    mostrar.style.display = "flex";

})

body.addEventListener("touchstart",()=>{
     mostrar.style.display = "none";
})