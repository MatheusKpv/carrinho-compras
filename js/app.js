let total = 1400;
let carrinho = document.getElementById('lista-produtos');
let textoTotal = document.getElementsByClassName('carrinho__total')[0];

function adicionar() {   
    let qtd = document.getElementById('quantidade').value;
    if (qtd == '') {
        alert('por favor, adicione a quantidade de produtos de vc deseja');
    } else {
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-') [0];
        let valorProdutoDinheiro = produto.split(' - ') [1];
        let valorProdutoNumero = valorProdutoDinheiro.replace(/\D+/g, '');
        resultado = valorProdutoNumero * qtd;
        total = total + resultado;

        //adiciona uma section nos produtos no carrinho
        criarElemento('section', carrinho);
        novoElemento.setAttribute('class', 'carrinho__produtos__produto');
        novoElemento.innerHTML = `<span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">${valorProdutoDinheiro}</span>`

        gerarTextoTotal();
        
        limparQtd();
    }
    
}

function limpar() {
    carrinho.innerHTML = '';
    total = 0;
    resultado = 0;
    gerarTextoTotal();
    limparQtd();
}

function criarElemento(elemento, campo) {
    let texto = document.createElement(`${elemento}`);
    return novoElemento = campo.appendChild(texto);
}

function gerarTextoTotal() {
    return textoTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${total}</span>`;
}

function limparQtd() {
    document.getElementById('quantidade').value = '';
}