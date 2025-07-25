alert('Boas Vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute; 
let tent = 1; 

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10:');
    //se chute for igual ao número secreto
    if(chute == numeroSecreto){
        alert(`Isso aí! Você descobriu o número Secreto (${numeroSecreto})`);
        if(tent == 1){
            alert('Você tentou uma vez!');
        } else {
            alert(`Você tentou ${tent} vezes!`)
        }
        
    }else{
        alert('Você errou!');
        tent++
        if(chute > numeroSecreto){
        alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    
    }
}
