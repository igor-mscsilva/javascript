var agora = new Date() // pegando o dia da semana no sistema
var diasem = agora.getDay() // atribuindo o dia da semana na variavel diasem
/* ordem do javascript
    0 = Domindo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/
diasem = 7
//console.log(diasem)

switch(diasem){
    case 0 :
        console.log('Domingo')
        break
    case 1 :
        console.log('Segunda-Feira')
        break
    case 2 :
        console.log('Terça-Feita')
        break
    case 3 : 
        console.log('Quarta-Feita')
        break
    case 4 :
        console.log('Quinta-Feira')
        break
    case 5 :
        console.log('Sexta-Feira')
        break
    case 6 :
        console.log('Sabado')
        break

    default:
        console.log('[Erro] Dia invalido !')

}