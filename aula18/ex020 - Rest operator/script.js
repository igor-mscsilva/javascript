function cadastroPessoa(info){
    let newdados = {
        ...info,
        cidade : 'SP',
        status : 1
    };
    return newdados;
}

console.log(cadastroPessoa({nome: 'Igor', sobrenome: 'Silva', idade : 30}));