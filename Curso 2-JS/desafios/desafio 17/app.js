function mostrarTextoNaTela(campo,texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1','Desafio 17');

function iniciar(){
    let n = parseInt(prompt('Informe um número para o cálculo de sua tabuada: '));

    let c = 1
    while(c <= 10){
        let x = n*c
        console.log(`${n} X ${c} = ${x}`);
        c = c + 1
    }
}