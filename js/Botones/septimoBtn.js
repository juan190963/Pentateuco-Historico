

let hideText_btn7 = document.getElementById('hideText_btn7');
let hideText7 = document.getElementById('hideText7');

hideText_btn7.addEventListener('click', toggleText);

function toggleText(){
    hideText7.classList.toggle('show7');

        if(hideText2.classList.contains('show7')){
            hideText_btn2.innerHTML = 'Ver más'
        }
    
}