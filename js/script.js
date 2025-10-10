const main = document.getElementById("main-doc");
const btn = document.getElementById("btn");
const mostrar = document.getElementById("mostrar");

btn.addEventListener("click", ()=>{
   
    mostrar.style.display = "flex";

})

main.addEventListener("touchstart",()=>{
    mostrar.style.display = "none";
})