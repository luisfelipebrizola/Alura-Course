let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarbsoma(){
    let n1 = parseInt(prompt('Digite um número inteiro: '));
    let n2 = parseInt(prompt('Digite outro número inteiro: '));
    let soma = n1 + n2;
    alert(`A soma desses números é ${soma}`);
}