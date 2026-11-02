
const imagens = document.querySelectorAll('.carrossel-container img');

let indiceAtual = 0;

imagens[0].classList.add('ativa');

setInterval(() => {
    imagens[indiceAtual].classList.remove('ativa');

    indiceAtual = (indiceAtual + 1) % imagens.length;

    imagens[indiceAtual].classList.add('ativa');

}, 3000);