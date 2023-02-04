function calcular(){
    // Pegar os dados
    var num = window.document.getElementById('inum')
    var tab = window.document.getElementById('seltab')
    //Converter string em Number
    var n = Number(num.value)
    //-------------------------
    var cont = 1
    if( num.value.length == 0){
        window.alert('[ERRO], informe um numero !')
    }else {
        //Limpar a area de tabuada.
        tab.innerHTML= ''
        while (cont <= 10){
            
            // Criar o elemento option na section em JS
            var item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            cont++
            //Adicionar um elemento filho que vai mostrar dentro da tag = select em html
            tab.appendChild(item)
        }
    }



}