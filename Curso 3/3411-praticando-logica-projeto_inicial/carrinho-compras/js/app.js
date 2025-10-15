let totalGeral = 0;


function limpar(){
    let total = document.getElementById('valor-total');
    let carrinho = document.getElementById('lista-produtos');
    totalGeral = 0;
    total.innerHTML = 'R$0,00';
    carrinho.innerHTML = '';
}

limpar();

    
function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quant = document.getElementById('quantidade').value;
    let total = document.getElementById('valor-total');
    let valorUni = valor * quant;
    let carrinho = document.getElementById('lista-produtos');
    totalGeral = totalGeral + valorUni;
    
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quant}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUni},00</span>
    </section>`
    total.innerHTML = `R$${totalGeral},00`;
    document.getElementById('quantidade').value = '';
    
}


    
    
