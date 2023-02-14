//REST OPERATOR

/*function minhalista(...nomes){ // adicionando o (...) ele ira mostrar todos nomes passados no parametro(minhalista)
    console.log(nomes);
}

minhalista('Igor', 'Mateus', 'João');*/

function cadastrar(usuarios, ...newusers){
    let totalusers = [
        // juntar os 2
        ...usuarios,
        ...newusers
    ];
    return console.log(totalusers)

}

let usuarios = ['Igor', 'Marcos'];

let newusers = cadastrar(usuarios, 'João', 'Murilo');