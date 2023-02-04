var num = [1,2,3,4,5,7,8,0]
var posicao = num.indexOf(8)
//num.push(7)
//console.log(num)

//console.log(`${num}`) //- mostrar os numeros que tem em num

//console.log(`O vetor tem ${num.length} posições`) // mostrar quantas posiçoes

//console.log(num[1]) // mostrar o numero na posição desejada

for(var pos = 0; pos < num.length; pos ++){
    console.log(num[pos])
}

console.log(`O valor 8 esta na posição ${posicao}`)