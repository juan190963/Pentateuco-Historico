let listElements = document.querySelectorAll('.menu_button--click');

listElements.forEach(listElements =>{
    listElements.addEventListener('click', ()=>{

        
        
        listElements.classList.toggle('abajo');
         let height = 0;
         let menu = listElements.nextElementSibling;
         console.log(menu.scrollHeight) 

         if(menu.clientHeight == 0){

            height=menu.scrollHeight;
         }

         menu.style.height = height+"px"
         

    })
    
})


