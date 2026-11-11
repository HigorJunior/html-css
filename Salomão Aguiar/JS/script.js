 const botaoMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

// ABRIR E FECHAR MENU MOBILE

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

// FECHAR MENU AO CLICAR EM UM LINK

const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
    });
});