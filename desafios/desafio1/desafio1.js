let cont = prompt('Escolha um número: ');

if(cont > 0){
    while(cont >= 0){
        console.log(cont);
        cont--;
    }
}else{
    if(cont < 0){
        while(cont <= 0){
            console.log(cont);
        cont++;
        }
        
    } else{
        console.log(cont)
    }
}
   