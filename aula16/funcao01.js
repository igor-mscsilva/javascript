var num = [2,5,7,9,10]

/*for(var pos = 0; pos < num.length; pos ++){
    //console.log(num[pos])
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

/*for(let pos in num){ // fazer a mesma função da de cima "Para cada posição dentro de num (for = para) (in = dentro ou em)"
    console.log(num[pos])
}*/

/*for(var pos = 0; pos < num.length; pos++){
    console.log(`O valor do posição ${pos} é ${num[pos]}`)
}*/

let pos = num.indexOf(7)  // Pesquisar pelo numero colocado em (), se o resultado for -1 que dizer que não encontrou

/*if( pos == -1){
    console.log("O valor não foi encontrado !")
}else{
    console.log(`O valor 7 esta na posição ${pos}`)
}*/

function parimpar(n){ // (n) é o parametro informal
    if(n%2 == 0){
        return 'PAR !'
    }else {
        return 'IMPAR !'
    }
}
//console.log(parimpar(10)) // Mostrar direto na tela sem precisar de variavel

let resp = parimpar(10) // atribuir o valor do resultado da função na variavel resp, (10 é o parametro real)
console.log(resp) // exibir na tela o resultado guardado na varivel resp