const elementoMusica = document.getElementById('musica'); 
const elementoAutor = document.querySelector('#autor'); 
const elementoImg = document.querySelector('#imagem')
let elementoBtn = document.querySelector('#alterar')

elementoBtn.addEventListener('click', () =>{
    
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = 'amianto.jpg' 
        elementoMusica.innerText = 'Amianto' 
        elementoAutor.innerText = 'SUPERCOMBO' 
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') {
        elementoImg.src = 'vitorkley6.jpg'  
        elementoMusica.innerText = 'Duvida' 
        elementoAutor.innerText = 'Vitor Kley ft. Jão' 
        elementoBtn.value = 'terceiro' 
    } else { 
        elementoImg.src = 'dinheiro.jpg' 
        elementoMusica.innerText = 'Faça dinheiro, se mantenha vivo.' 
        elementoAutor.innerText = 'LEALL' 
        elementoBtn.value = 'primeiro' 
    }
})