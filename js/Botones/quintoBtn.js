

let hideText_btn5 = document.getElementById('hideText_btn5');
let hideText5 = document.getElementById('hideText5');

hideText_btn5.addEventListener('click', toggleText);

function toggleText(){
    hideText5.classList.toggle('show5');

        if(hideText5.classList.contains('show5')){
            hideText_btn5.innerHTML = 'Ver más'
        }
    
}