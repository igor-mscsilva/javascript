function verificar(){
    var data = new Date() // pegar data
    var ano = data.getFullYear() // pegar ano atual, 4 digitos
    var formano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(formano.value.length == 0 || formano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formano.value)
        var genero = ''
        //Criar tag utilizando JS
        var img = document.createElement('img')
        //Atribuindo id na tag 'img', utilizando JS
        img.setAttribute('id','foto' )
        
        if( sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'hcriança.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','hjovem.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'hdulto.png')
            }else {
                //Idoso
                img.setAttribute('src', 'hvelho.png')
            }

        }else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'mcriança.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','mjovem.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'madulta.png')
            }else {
                //Idoso
                img.setAttribute('src', 'mvelha.png')
            }
        }
        //centraliza o texto em js.
        res.style.textAlign = 'center' 

        // mostrar o resultado na tela com js.
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        // Mostrar conteudo em baixo do de cima
        res.appendChild(img)

                 
    }
}