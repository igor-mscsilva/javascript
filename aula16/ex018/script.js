// Pegar os dados
var num = window.document.getElementById('inum') // pegar numero digitado
var tab = window.document.getElementById('seltab') // id da tabela
var resp = window.document.getElementById('res') // id res
//Converter string em Number
var n = Number(num.value)
var valores = [] // lista, vetor

//Função de verificar se o numero esta na lista
function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){ // se na lista o number de n for diferente de -1, -1 indica que não foi encontrado na lista
        return true
    }else{
        return false
    }
}

function adicionar(){
    
    if( num.value.length == 0 || num.value > 100 || num.value == 0 ||  inLista(num.value, valores)){
        window.alert('\u{1F6A8} ERRO \u{1F6A8} - Valor inválido ou já encontrado na lista !')
        
    }else {
        
        valores.push(Number(num.value)) 
        // Criar o elemento option na section em JS
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        
        //Adicionar um elemento filho que vai mostrar dentro da tag = select em html
        tab.appendChild(item)
        resp.innerHTML = '' // apos add limpar o campo
    }
        num.value = '' // limpar o campo
        num.focus() // ficar piscando o cursor
}
console.log(valores)

function calcular(){

}

function finalizar(){
    if(valores.length == 0){
        window.alert('[ERRO]Adicione valore antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos = 0; pos < valores.length; pos++){ // analisar o maior e menor numero no vetor
            soma += valores[pos] // soma dos valores
            media = soma / tot // média
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        resp.innerHTML = ''
        resp.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        resp.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resp.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resp.innerHTML += `<p>A soma dos valores foi ${soma}.</p>`
        resp.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }


}