const imagenes = document.querySelector('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.img-light')

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click',()=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hambuerger1.style.opacity='1'
    }
})

const aparecerImagen=(imagen)=>{
    imagenesLight.src= imagen;
    contenedorLight.classList.toggle('show ')
    imagenesLight.classList.toggle('showImage')
    hambuerger1.style.opacity='0'
}