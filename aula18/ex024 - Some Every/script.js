// SOME EVERY

/*let nomes = ['Matheus', 'Lucas', 'Henrique'];

//Verificar se no array acima tem o nome Matheus.
console.log(nomes.some(nome => nome === 'Matheus'));*/


let nomes = [
    {nome: 'Matheus', idade: 18},
    {nome: 'Maria', idade: 25},
    {nome: 'Henrique', idade: 20}
];
// verifica se todas as idades são maior que 18, ira retornar true
console.log(nomes.every(nome => nome.idade >= 18));


if(nomes.every(nome => nome.idade >= 18)){
    console.log('TODOS SÃO MAIORES DE 18 :)')

}else{
    console.log('OPS ALGUÉM É DE MENOR ;(')
}