function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    var res = window.document.querySelector('div#res')
   //Transformar string em Number
    var cont = Number(ini.value )
    var p = Number(passo.value)
    var f = Number(fim.value)
    

    if (ini.value.length == 0 || fim.value.length == 0 ){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }else {
        res.innerHTML = 'Contando: <br>'
        if ( p <= 0){
            window.alert('Passo inválido! Considerando o PASSO 1')
            p = 1
        }
        if( cont < f ){
            //Contagem crescente
            while( cont <= f){
       
            res.innerHTML += `${cont} \u{1F449} `
            cont += p  
         }
         
         /*for(cont = i; cont <= f; cont += p){
            res.innerHTML += `${cont} `
         }*/
        } else {
            //Contagem regressiva
            while(cont >= f){
                
                res.innerHTML += `${cont} \u{1F449} `
                cont -= p
            }
        }
        res.innerHTML += `\u{1F3C1}`   
    }
}