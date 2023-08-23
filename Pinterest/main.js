
AOS.init()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30
  });

// Vriavel global da Imagem clickada
var currentImage

function openModal(element) {

    // Setando a Imagem baseado no elemento clickado
    currentImage = element

    // Obtem da Bolinha que faz o efeito
    let morphReference = document.getElementById('morph')

    // Obtem da Modal
    let modalReference = document.getElementById('modal')

    // Obtem do posicionamento da Imagem clickada
    let imageReferencePosition = currentImage.getBoundingClientRect()

    // Obtem da imagem que fica dentro do Modal
    let imagePreviewReference = document.getElementById('imagePreview')

    // Calculo para posicionar a Bolinha no centro vertical da Imagem
    morphReference.style.top = imageReferencePosition.top + imageReferencePosition.height / 2 - 25

    // Calculo para posicionar a Bolinha no centro horizontal da Imagem
    morphReference.style.left = imageReferencePosition.left + imageReferencePosition.width / 2 - 25

    // Desativa o scroll da pagina
    document.querySelector('body').style.overflowY = 'scroll'

    // Adiciona classe que faz a Bolinha expandir
    morphReference.classList.add('morph-open')

    // Adiciona classe que some com a Imagem clickada
    currentImage.classList.add('image-morph')

    // Adiciona classe que faz o modal aparecer
    modalReference.classList.add('modal-opened')

    // Adiciona como src da Imagem de Preview de dentro do Modal o mesmo src da Imagem clickada
    imagePreviewReference.src = element.src

}

function closeModal() {

    let morphReference = document.getElementById('morph')
    let modalReference = document.getElementById('modal')

    currentImage.classList.add('image-morph-closing')
    morphReference.classList.add('morph-closing')
    setTimeout( () => {

        currentImage.classList.remove('image-morph-closing')
        morphReference.classList.remove('morph-closing')
        morphReference.classList.remove('morph-open')
        currentImage.classList.remove('image-morph')

    }, 1000 )

    modalReference.classList.add('modal-closing')
    setTimeout( () => {

        modalReference.classList.remove('modal-opened')
        modalReference.classList.remove('modal-closing')

    }, 1400 )

    document.querySelector('body').style.overflowY = 'visible'

}

function headerHandler() {

    let mainHeaderReference = document.querySelector('#mainHeader')

    mainHeaderReference.classList.toggle('main-header-opened')

}