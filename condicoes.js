var agora = new Date()
var hora = agora.getHours()
console.log(`agora são extamente ${hora} horas`)
if (hora < 12){
    console.log('Bomdia')
}else if ( hora <= 18){
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}
