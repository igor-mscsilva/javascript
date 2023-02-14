// função entrar
/*function acao(){
    document.write('Executando...<br>');
}*/

//Executar de tempo em tempo!
//setInterval(acao, 1000);

var nome = '';

if( typeof localStorage.nome == 'undefined' ){
    localStorage.nome = prompt("Digite seu nome !");

}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;