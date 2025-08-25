function mostrarTextoNaTela(campo, texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto
}

mostrarTextoNaTela('h1', 'Desafio 13');

function iniciar(){
    let num = parseInt(prompt('Informe um número real, positivo e inteiro: '));

    let resfat = calcularFat(num)

    function calcularFat(x){
        c = x - 1
        while(c >= 1){
            x = x*c
            c = c - 1
        }
        return x
    }

    mostrarTextoNaTela('h1', `O resultado do fatorial de ${num} é ${resfat}`);
}