let hideText_btn4 = document.getElementById('hideText_btn4');
let hideText4 = document.getElementById('hideText4');

hideText_btn4.addEventListener('click', toggleText);

function toggleText(){
    hideText4.classList.toggle('show4');

        if(hideText4.classList.contains('show4')){
            hideText_btn4.innerHTML = 'Ver más'
        }
    
}