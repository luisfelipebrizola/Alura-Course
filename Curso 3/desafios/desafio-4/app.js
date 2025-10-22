function mostrarTextoNaTela(campo,texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1','Desafio 4');

let ano = document.getElementById('ano').value;
let centenario = anoCentenario(ano);

function anoCentenario(x){
    return x/100
}