   
/* MENU MOBILE */

const botaoMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

// ABRIR E FECHAR MENU MOBILE

if (botaoMenu && menu) {

    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });

}


// FECHAR MENU AO CLICAR EM UM LINK

const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach(link => {

    link.addEventListener('click', () => {

        if (menu) {
            menu.classList.remove('ativo');
        }

    });

});



/* CARROSSEL DE RESULTADOS */

const trilhoResultados = document.querySelector('.resultados-trilho');

const paginasResultados = document.querySelectorAll('.resultados-pagina');

const setaAnterior = document.querySelector('.seta-anterior');

const setaProxima = document.querySelector('.seta-proxima');

let paginaAtual = 0;


// ATUALIZAR POSIÇÃO DO CARROSSEL

function atualizarCarrossel() {

    if (!trilhoResultados || paginasResultados.length === 0) {
        return;
    }

    trilhoResultados.style.transform =
        `translateX(-${paginaAtual * 100}%)`;


    // DESATIVAR SETA ANTERIOR NA PRIMEIRA PÁGINA

    if (setaAnterior) {
        setaAnterior.disabled = paginaAtual === 0;
    }


    // DESATIVAR SETA PRÓXIMA NA ÚLTIMA PÁGINA

    if (setaProxima) {
        setaProxima.disabled =
            paginaAtual === paginasResultados.length - 1;
    }

}


// VOLTAR PARA O CONJUNTO ANTERIOR

if (setaAnterior) {

    setaAnterior.addEventListener('click', () => {

        if (paginaAtual > 0) {

            paginaAtual--;

            atualizarCarrossel();

        }

    });

}


// AVANÇAR PARA O PRÓXIMO CONJUNTO

if (setaProxima) {

    setaProxima.addEventListener('click', () => {

        if (paginaAtual < paginasResultados.length - 1) {

            paginaAtual++;

            atualizarCarrossel();

        }

    });

}


// INICIAR CARROSSEL

atualizarCarrossel();



/* CARROSSEL DE SANTA MARGARIDA */

// FOTOS DE SANTA MARGARIDA

const fotosSantaMargarida = [

    {
        imagem: 'img/ChatGPT Image 16 de out. de 2026, 19_45_02.jpg',
        descricao: 'Consultório'
    },

    {
        imagem: 'img/santa-margarida-recepcao.jpg',
        descricao: 'Recepção'
    },

    {
        imagem: 'img/santa-margarida-fachada.jpg',
        descricao: 'Fachada'
    }

];


// ELEMENTOS DO CARROSSEL DE SANTA MARGARIDA

const imagemSanta = document.querySelector('.foto-santa');

const legendaSanta = document.querySelector('.legenda-santa');

const contadorSanta = document.querySelector('.contador-santa');

const setaSantaAnterior = document.querySelector('.seta-santa-anterior');

const setaSantaProxima = document.querySelector('.seta-santa-proxima');

let indiceSanta = 0;


// ATUALIZAR FOTO DE SANTA MARGARIDA

function atualizarSantaMargarida() {

    if (!imagemSanta) {
        return;
    }

    const fotoAtual = fotosSantaMargarida[indiceSanta];

    imagemSanta.src = fotoAtual.imagem;
    imagemSanta.alt = `${fotoAtual.descricao} de Santa Margarida`;

    legendaSanta.textContent = fotoAtual.descricao;

    contadorSanta.textContent =
        `${indiceSanta + 1} / ${fotosSantaMargarida.length}`;

}


// FOTO ANTERIOR DE SANTA MARGARIDA

if (setaSantaAnterior) {

    setaSantaAnterior.addEventListener('click', () => {

        indiceSanta--;

        if (indiceSanta < 0) {
            indiceSanta = fotosSantaMargarida.length - 1;
        }

        atualizarSantaMargarida();

    });

}


// PRÓXIMA FOTO DE SANTA MARGARIDA

if (setaSantaProxima) {

    setaSantaProxima.addEventListener('click', () => {

        indiceSanta++;

        if (indiceSanta >= fotosSantaMargarida.length) {
            indiceSanta = 0;
        }

        atualizarSantaMargarida();

    });

}


// INICIAR SANTA MARGARIDA

atualizarSantaMargarida();



/* CARROSSEL DE ORIZÂNIA */

// FOTOS DE ORIZÂNIA

const fotosOrizania = [

    {
        imagem: 'img/ChatGPT Image 16 de out. de 2026, 19_45_02.jpg',
        descricao: 'Consultório'
    },

    {
        imagem: 'img/or izania-fachada.jpg',
        descricao: 'Fachada'
    },

    {
        imagem: 'img/or izania-recepcao.jpg',
        descricao: 'Recepção'
    }

];


// ELEMENTOS DO CARROSSEL DE ORIZÂNIA

const imagemOrizania = document.querySelector('.foto-orizania');

const legendaOrizania = document.querySelector('.legenda-orizania');

const contadorOrizania = document.querySelector('.contador-orizania');

const setaOrizaniaAnterior = document.querySelector('.seta-orizania-anterior');

const setaOrizaniaProxima = document.querySelector('.seta-orizania-proxima');

let indiceOrizania = 0;


// ATUALIZAR FOTO DE ORIZÂNIA

function atualizarOrizania() {

    if (!imagemOrizania) {
        return;
    }

    const fotoAtual = fotosOrizania[indiceOrizania];

    imagemOrizania.src = fotoAtual.imagem;
    imagemOrizania.alt = `${fotoAtual.descricao} de Orizânia`;

    legendaOrizania.textContent = fotoAtual.descricao;

    contadorOrizania.textContent =
        `${indiceOrizania + 1} / ${fotosOrizania.length}`;

}


// FOTO ANTERIOR DE ORIZÂNIA

if (setaOrizaniaAnterior) {

    setaOrizaniaAnterior.addEventListener('click', () => {

        indiceOrizania--;

        if (indiceOrizania < 0) {
            indiceOrizania = fotosOrizania.length - 1;
        }

        atualizarOrizania();

    });

}


// PRÓXIMA FOTO DE ORIZÂNIA

if (setaOrizaniaProxima) {

    setaOrizaniaProxima.addEventListener('click', () => {

        indiceOrizania++;

        if (indiceOrizania >= fotosOrizania.length) {
            indiceOrizania = 0;
        }

        atualizarOrizania();

    });

}


// INICIAR ORIZÂNIA

atualizarOrizania();
