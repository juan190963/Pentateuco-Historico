let hideText_btn3 = document.getElementById('hideText_btn3');
let hideText3= document.getElementById('hideText3');

hideText_btn3.addEventListener('click', toggleText);

function toggleText(){
    hideText3.classList.toggle('show3');

    if(hideText.classList.contains('show3')){
        hideText_btn3.innerHTML = 'readMore-btn'
    }
}