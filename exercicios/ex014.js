var dia = new Date()
var diaSem = dia.getDay()

switch(diaSem) {
    case 0: console.log(`Domingo`)
        break
    case 1: console.log(`Segunda`)
        break
    case 2: console.log(`Terça`)
        break
    case 3: console.log('Quarta')
        break
    case 4: consele.log('Quinta')
        break
    case 5: consele.log('Sexta')
        break
    case 6: console.log('Sabado')
        break
    default: console.log('[Erro] Dia da semana inválido')
        break
}
