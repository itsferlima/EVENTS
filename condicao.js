/*var vel = 50
console.log(`A velocidade do seu carro é ${vel}`)

if(vel>60){
    console.log('multado,')
} console.log('Digija com cuidado')*/


/*var idade = 22
if(idade<16){
    console.log('Não vota')
    } else if(idade < 18 || idade >  65){
        console.log('Voto opcional')
    }else{
        console.log('Voto obrigatorio')
    }
*/

/*var agora = new Date() USAR NEW DATE() PEGA HORA ATUAL
var hora = agora.getHours()
    console.log(`agora são extamente ${hora} horas`)
if (hora < 12){
    console.log('Bomdia')
}else if ( hora <= 18){
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}*/

 /*CONDIÇÕES MULTIPLAS*/
var agora = new Date() // para dia o javascrip inicia no dominho(0) segunda(1)
var diaSem = agora.getDay() 

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('ERRO ! dia invalido')
        break
}
       