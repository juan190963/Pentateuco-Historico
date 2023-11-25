

let hideText_btn2 = document.getElementById('hideText_btn2');
let hideText2 = document.getElementById('hideText2');

hideText_btn2.addEventListener('click', toggleText);

function toggleText(){
    hideText2.classList.toggle('show2');

        if(hideText2.classList.contains('show2')){
            hideText_btn2.innerHTML = 'Ver más'
        }
    
}