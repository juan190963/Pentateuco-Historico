const hambuerger = document.querySelector('.menu');
const menu = document.querySelector('.menu-navegacion');
console.log(menu)
console.log(menu)

hambuerger.addEventListener('mouseover',()=>{
     menu.classList.toggle("spread")
}) 

window.addEventListener('', e=>{
    if(menu.classList.contains('spread')&& e.target != menu && e.target !=hambuerger){
        menu.classList.toggle("spread")
    }
})

