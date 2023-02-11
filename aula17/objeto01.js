let amigo = {nome: 'José', 
sexo: 'M',
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2) // adicionou 2 kilo na funcao enforgar
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

let num = 8


console.log(num **= 2)