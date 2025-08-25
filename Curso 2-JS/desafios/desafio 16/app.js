function mostrarTextoNaTela(campo, texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1','Desafio 16');

function iniciar(){
    let raio = parseFloat(prompt('Informe o raio da sala: ').replace(',','.'));

    let area = calcularArea(raio);

    function calcularArea(x){
        return 3.14*(x*x)
    }

    mostrarTextoNaTela('h1', `A área da sala é de ${area.toFixed(2)}`);
}