function mostrarTextoNaTela(campo, texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1', 'Desafio 14');

function iniciar(){
    let valor = prompt('Informe um valor: ');
    let valorf = parseFloat(valor.replace(',','.'));
    let conversao = converter(valorf)

    function converter(x){
        x = x*4.8
        return x
    }

    mostrarTextoNaTela('h1', `${valor} dólares equivale a ${conversao} reais `);
}