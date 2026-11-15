

    const janelaCarrossel = document.querySelector('.carrossel-janela');
    const faixaCarrossel = document.querySelector('.carrossel-faixa');
    const botaoAnterior = document.querySelector('.carrossel-anterior');
    const botaoProximo = document.querySelector('.carrossel-proximo');

    if (janelaCarrossel && faixaCarrossel) {

        const imagensOriginais = Array.from(faixaCarrossel.children);
        const totalImagens = imagensOriginais.length;

        imagensOriginais.slice(0, 3).forEach(imagem => {
            faixaCarrossel.appendChild(imagem.cloneNode(true));
        });

        let indiceAtual = 0;
        let intervalo;

        function larguraPasso() {
            const imagem = faixaCarrossel.querySelector('.carrossel-item');
            const estilos = getComputedStyle(faixaCarrossel);
            const espacamento = parseFloat(estilos.gap) || 0;

            return imagem.getBoundingClientRect().width + espacamento;
        }

        function irParaImagem(indice) {
            indiceAtual = indice;

            janelaCarrossel.scrollTo({
                left: indiceAtual * larguraPasso(),
                behavior: 'smooth'
            });

            if (indiceAtual >= totalImagens) {
                setTimeout(() => {
                    indiceAtual = 0;

                    janelaCarrossel.scrollTo({
                        left: 0,
                        behavior: 'auto'
                    });
                }, 600);
            }
        }

        function proximaImagem() {
            irParaImagem(indiceAtual + 1);
        }

        function imagemAnterior() {
            if (indiceAtual === 0) {
                indiceAtual = totalImagens;
                janelaCarrossel.scrollTo({
                    left: indiceAtual * larguraPasso(),
                    behavior: 'auto'
                });
            }

            irParaImagem(indiceAtual - 1);
        }

        function iniciarAutomatico() {
            intervalo = setInterval(proximaImagem, 4000);
        }

        function reiniciarAutomatico() {
            clearInterval(intervalo);
            iniciarAutomatico();
        }

        botaoProximo.addEventListener('click', () => {
            proximaImagem();
            reiniciarAutomatico();
        });

        botaoAnterior.addEventListener('click', () => {
            imagemAnterior();
            reiniciarAutomatico();
        });

        let arrastando = false;
        let inicioX = 0;
        let posicaoInicial = 0;

        janelaCarrossel.addEventListener('pointerdown', (evento) => {
            if (evento.pointerType !== 'mouse') return;

            arrastando = true;
            inicioX = evento.clientX;
            posicaoInicial = janelaCarrossel.scrollLeft;
            janelaCarrossel.setPointerCapture(evento.pointerId);
            janelaCarrossel.style.scrollBehavior = 'auto';
        });

        janelaCarrossel.addEventListener('pointermove', (evento) => {
            if (!arrastando) return;

            const distancia = evento.clientX - inicioX;
            janelaCarrossel.scrollLeft = posicaoInicial - distancia;
        });

        function finalizarArraste() {
            if (!arrastando) return;

            arrastando = false;
            janelaCarrossel.style.scrollBehavior = 'smooth';

            indiceAtual = Math.round(
                janelaCarrossel.scrollLeft / larguraPasso()
            );

            if (indiceAtual >= totalImagens) {
                indiceAtual = 0;
            }

            irParaImagem(indiceAtual);
            reiniciarAutomatico();
        }

        janelaCarrossel.addEventListener('pointerup', finalizarArraste);
        janelaCarrossel.addEventListener('pointercancel', finalizarArraste);

        iniciarAutomatico();
    }



/* ========================================
   CARROSSEL NOSSO ESPAÇO
======================================== */

const janelaEspaco = document.querySelector('.espaco-janela');
const faixaEspaco = document.querySelector('.espaco-faixa');
const anteriorEspaco = document.querySelector('.espaco-anterior');
const proximoEspaco = document.querySelector('.espaco-proximo');

if (janelaEspaco && faixaEspaco) {

    const imagensEspaco = Array.from(faixaEspaco.children);
    const totalEspaco = imagensEspaco.length;

    imagensEspaco.slice(0, 3).forEach(imagem => {
        faixaEspaco.appendChild(imagem.cloneNode(true));
    });

    let indiceEspaco = 0;
    let intervaloEspaco;

    function passoEspaco() {
        const imagem = faixaEspaco.querySelector('.espaco-item');
        const estilos = getComputedStyle(faixaEspaco);
        const gap = parseFloat(estilos.gap) || 0;

        return imagem.getBoundingClientRect().width + gap;
    }

    function irParaEspaco(indice) {
        indiceEspaco = indice;

        janelaEspaco.scrollTo({
            left: indiceEspaco * passoEspaco(),
            behavior: 'smooth'
        });

        if (indiceEspaco >= totalEspaco) {
            setTimeout(() => {
                indiceEspaco = 0;

                janelaEspaco.scrollTo({
                    left: 0,
                    behavior: 'auto'
                });
            }, 600);
        }
    }

    function proximaFotoEspaco() {
        irParaEspaco(indiceEspaco + 1);
    }

    function fotoAnteriorEspaco() {
        if (indiceEspaco === 0) {
            indiceEspaco = totalEspaco;

            janelaEspaco.scrollTo({
                left: indiceEspaco * passoEspaco(),
                behavior: 'auto'
            });
        }

        irParaEspaco(indiceEspaco - 1);
    }

    function iniciarEspaco() {
        intervaloEspaco = setInterval(proximaFotoEspaco, 4000);
    }

    function reiniciarEspaco() {
        clearInterval(intervaloEspaco);
        iniciarEspaco();
    }

    proximoEspaco.addEventListener('click', () => {
        proximaFotoEspaco();
        reiniciarEspaco();
    });

    anteriorEspaco.addEventListener('click', () => {
        fotoAnteriorEspaco();
        reiniciarEspaco();
    });

    let arrastandoEspaco = false;
    let inicioEspaco = 0;
    let posicaoEspaco = 0;

    janelaEspaco.addEventListener('pointerdown', evento => {
        if (evento.pointerType !== 'mouse') return;

        arrastandoEspaco = true;
        inicioEspaco = evento.clientX;
        posicaoEspaco = janelaEspaco.scrollLeft;

        janelaEspaco.setPointerCapture(evento.pointerId);
        janelaEspaco.style.scrollBehavior = 'auto';
    });

    janelaEspaco.addEventListener('pointermove', evento => {
        if (!arrastandoEspaco) return;

        const distancia = evento.clientX - inicioEspaco;
        janelaEspaco.scrollLeft = posicaoEspaco - distancia;
    });

    function finalizarArrasteEspaco() {
        if (!arrastandoEspaco) return;

        arrastandoEspaco = false;
        janelaEspaco.style.scrollBehavior = 'smooth';

        indiceEspaco = Math.round(
            janelaEspaco.scrollLeft / passoEspaco()
        );

        if (indiceEspaco >= totalEspaco) {
            indiceEspaco = 0;
        }

        irParaEspaco(indiceEspaco);
        reiniciarEspaco();
    }

    janelaEspaco.addEventListener('pointerup', finalizarArrasteEspaco);
    janelaEspaco.addEventListener('pointercancel', finalizarArrasteEspaco);

    iniciarEspaco();
}

