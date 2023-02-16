// Array = [] / object = {}
const lista = [1,2,3,4,5,6];

// função map ira percorrer toda a lista
const newlista = lista.map(function(item){
    // fazer cada numero * 5
    return item * 5 ;
});
console.log(newlista);


const newlista1 = lista.map(function(item,index){
    // fazer cada numero somar com o numero da posição
    return item + index ;
});
console.log(newlista1);


const soma = lista.reduce(function(total,proxitem){
    // total no começo é 0, e somando com o proximo item até chegar no valor total dos itens do array.
    return total + proxitem
});
console.log(soma);

const busca = lista.find(function(item){
    // ira buscar o numero na lista array, se tiver o numero ira retornar no console o numero se não ira retornar undefined.
    return item === 6;
});
console.log(busca);