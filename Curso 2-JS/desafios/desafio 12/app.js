function mostrarTextoNaTela(campo, texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = (texto);
}

mostrarTextoNaTela('h1', 'Desafio 12');


function iniciar(){
    let peso = parseFloat(prompt('Informe seu peso (Kg): '));
    let altura = prompt('Digite sua altura (m): ');
    
    let alturaf = parseFloat(altura.replace(',', '.'));
    
    let IMC = calcularIMC(peso, alturaf);
    
    function calcularIMC(x,y){
        return x/(y*y);
    }
    mostrarTextoNaTela('h1', `seu IMC é de ${IMC.toFixed(2)}`);
    
}