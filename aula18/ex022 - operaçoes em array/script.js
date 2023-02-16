// função anonima
/*function adicionar(...numeros){

    let total = numeros.reduce(function(total,proxitem){
        // total no começo é 0, e somando com o proximo item até chegar no valor total dos itens do array.
        return total + proxitem
    });
    console.log(total);


}*/


function adicionar(...numeros){

    let total1 = numeros.reduce((total,proxitem) => { // => codigo reduzido com função anonima
        // total no começo é 0, e somando com o proximo item até chegar no valor total dos itens do array.
        return total + proxitem
    });
    console.log(total1);


}

// código reduzido

function adicionar(...numeros){

    let total1 = numeros.reduce((total,proxitem) => total + proxitem);
    console.log(total1);


}


adicionar(1,2,3,4,5,6,7);
console.log(total1)