let nome = 'Aglis'
let minhaIdade = 18
let idadeIrmao = 26

if(minhaIdade > idadeIrmao) {
    console.log(`${nome} tem ${minhaIdade} anos e seu irmão tem ${idadeIrmao}. ${nome} é mais velho!`)
}
else if(minhaIdade === idadeIrmao) {
    console.log(`${nome} tem ${minhaIdade} anos e seu irmão tem ${idadeIrmao}. ${nome} e seu irmão têm a mesma idade!`)
}
else {
    console.log(`${nome} tem ${minhaIdade} anos e seu irmão tem ${idadeIrmao}. ${nome} é mais novo!`)
}

console.log('==================================================================================')

let expressao = (5 - 2) && (5 - ' ') && (5 - 2)
console.log(expressao)

console.log('==================================================================================')

let possuiGraduacao = false
let empregoFuturo
let dinheiroNaConta = 0
console.log(!!nome, !!minhaIdade, !!possuiGraduacao, !!empregoFuturo, !!dinheiroNaConta)

console.log('==================================================================================')

let brasil = 207
let china = 1340

if (brasil > china) {
    console.log(`brasil tem ${brasil} habitantes e china tem ${china} habitantes.`)
    console.log(`Brasil tem mais habitantes que a China!`)
}
else {
    console.log(`brasil tem ${brasil} habitantes e china tem ${china} habitantes.`)
    console.log(`China tem mais habitantes que o Brasil!`)
}

console.log('==================================================================================')

if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro')
}
else {
    console.log('Falso')
}

console.log('==================================================================================')


if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão')
}
else {
    console.log('Falso')
}
