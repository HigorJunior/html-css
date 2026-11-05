
/* =================================
   CARROSSEL DE IMAGENS
================================= */

const imagens = document.querySelectorAll('.carrossel-container img');

if (imagens.length > 0) {

    let indiceAtual = 0;

    imagens[0].classList.add('ativa');

    setInterval(() => {

        imagens[indiceAtual].classList.remove('ativa');

        indiceAtual = (indiceAtual + 1) % imagens.length;

        imagens[indiceAtual].classList.add('ativa');

    }, 3000);

}


/* =================================
   IDENTIFICAR O PRODUTO ESCOLHIDO
================================= */

const botoesComprar = document.querySelectorAll(
    '.produto .comprar, .jogo .comprar'
);

botoesComprar.forEach((botao) => {

    botao.addEventListener('click', function(event) {

        const card = botao.closest('.produto, .jogo');

        const imagem = card.querySelector('img').getAttribute('src');
        const nome = card.querySelector('h3, h4').textContent.trim();
        const preco = card.querySelector('.preco').textContent.trim();

        const produto = {
            imagem: imagem,
            nome: nome,
            preco: preco
        };

        sessionStorage.setItem(
            'produtoSelecionado',
            JSON.stringify(produto)
        );

    });

});


/* =================================
   RESUMO DO PRODUTO NO CHECKOUT
================================= */

const imagemResumo = document.querySelector('#imagem-resumo');
const nomeResumo = document.querySelector('#nome-resumo');
const precoResumo = document.querySelector('#preco-resumo');
const quantidadeProduto = document.querySelector('#quantidade-produto');
const subtotalResumo = document.querySelector('#subtotal-resumo');
const totalResumo = document.querySelector('#total-resumo');

let produtoSelecionado = null;

const dadosProduto = sessionStorage.getItem('produtoSelecionado');

if (dadosProduto) {
    produtoSelecionado = JSON.parse(dadosProduto);
}

function converterPreco(preco) {

    return Number(
        preco.replace(/[^\d,]/g, '').replace(',', '.')
    );

}

function formatarPreco(valor) {

    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

}

function atualizarResumo() {

    if (!produtoSelecionado || !quantidadeProduto) {
        return;
    }

    const quantidade = Math.max(
        1,
        parseInt(quantidadeProduto.value) || 1
    );

    quantidadeProduto.value = quantidade;

    const precoUnitario = converterPreco(produtoSelecionado.preco);
    const total = precoUnitario * quantidade;

    imagemResumo.src = produtoSelecionado.imagem;
    nomeResumo.textContent = produtoSelecionado.nome;
    precoResumo.textContent = produtoSelecionado.preco;

    subtotalResumo.textContent = formatarPreco(total);
    totalResumo.textContent = formatarPreco(total);

}

if (produtoSelecionado && imagemResumo) {
    atualizarResumo();
}

if (quantidadeProduto) {
    quantidadeProduto.addEventListener('input', atualizarResumo);
}


/* =================================
   CONFIRMAÇÃO DA COMPRA
================================= */

const formularioCompra = document.querySelector('#form-compra');

if (formularioCompra) {

    formularioCompra.addEventListener('submit', function(event) {

        event.preventDefault();

        const quantidade = quantidadeProduto
            ? Math.max(1, parseInt(quantidadeProduto.value) || 1)
            : 1;

        let resumoFinal = '';

        if (produtoSelecionado) {

            const precoUnitario = converterPreco(produtoSelecionado.preco);
            const total = precoUnitario * quantidade;

            resumoFinal = `
                <div class="produto-confirmado-resumo">

                    <img src="${produtoSelecionado.imagem}" alt="${produtoSelecionado.nome}">

                    <div>
                        <h3>${produtoSelecionado.nome}</h3>
                        <p>Preço: ${produtoSelecionado.preco}</p>
                        <p>Quantidade: ${quantidade}</p>
                        <strong>Total: ${formatarPreco(total)}</strong>
                    </div>

                </div>
            `;

        }

        formularioCompra.innerHTML = `

            <div class="pedido-confirmado">

                <div class="icone-confirmacao">✓</div>

                <span class="selo-confirmacao">
                    GAMING HOUSE
                </span>

                <h2>PEDIDO CONFIRMADO!</h2>

                <p class="texto-confirmacao">
                    Seu pedido foi finalizado com sucesso.
                </p>

                ${resumoFinal}

                <div class="numero-pedido">
                    <span>NÚMERO DO PEDIDO</span>
                    <strong>#GH2026-001</strong>
                </div>

                <p class="mensagem-confirmacao">
                    Agradecemos por escolher a Gaming House.
                    Esperamos você novamente!
                </p>

                <a href="index.html" class="botao-voltar-loja">
                    VOLTAR À LOJA →
                </a>

            </div>

        `;

        sessionStorage.removeItem('produtoSelecionado');

    });

}
