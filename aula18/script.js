// função entrar
function entrar(){
    var area = document.getElementById('area')
    var txt = prompt('Digite o seu nome: ')

    if(txt == '' || txt == null){
        alert('[ERRO] Digite um nome')
    }else{
        area.innerHTML= 'Bem Vindo ' + txt; 
    }

    
}

function entrar2(nome){
    var area2 = document.getElementById('area2')
    var txt = prompt('Digite o seu sobrenome: ')

    area2.innerHTML= `${nome} ${txt}`



}