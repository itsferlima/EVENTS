function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('textano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO')
    }else{
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value) // calcula a idade pelo ano digitado
        var genero = ''
       
        if(fsex[0].checked){
            genero = 'Homem'    
        }else {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}