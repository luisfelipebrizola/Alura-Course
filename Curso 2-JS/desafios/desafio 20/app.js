function mostrarTextoNaTela(campo,texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1','Desafio 20');

function iniciar(){
    let nomes = ['Luís','Rodrigo','Lari','Henrique','Roseli'];
    console.log(nomes[0]);
    console.log(nomes[1]);
    console.log(nomes[nomes.length - 1]);
    mostrarTextoNaTela('h1','olhe o console');
}