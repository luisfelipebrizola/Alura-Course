let titulo = document.querySelector('h1');
titulo.innerHTML = ('Desafio 11');

function iniciar(){
    let n = parseInt(prompt('Digite um número: '));
    let elemesmo = vezesele(n);

    function vezesele(x){
        return x*x
    }

    titulo.innerHTML = (`O quadrado do número informado é ${elemesmo}`);
}