

let hideText_btn6 = document.getElementById('hideText_btn6');
let hideText6 = document.getElementById('hideText6');

hideText_btn6.addEventListener('click', toggleText);

function toggleText(){
    hideText6.classList.toggle('show6');

        if(hideText6.classList.contains('show6')){
            hideText_btn2.innerHTML = 'Ver más'
        }
    
}