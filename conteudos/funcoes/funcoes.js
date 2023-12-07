let imc
function calcularImc(peso, altura) {
    imc = peso / (altura ** 2)
}

calcularImc(80, 1.8)
console.log(imc)

console.log('================================================')

function corFavorita(cor) {
    switch(cor) {
        case 'azul':
            return 'Gosto de Azul'
        case 'preto':
            return 'Gosto de preto'
        case 'amarelo':
            return 'Gosto de amarelo'
        case 'vermelho':
            return 'Gosto de vermelho'
        case 'verde':
            return 'Gosto de verde'
        case 'cinza':
            return 'Gosto de cinza'
        case 'roxo':
            return 'Gosto de roxo'
        default:
            return 'Não tenho nenhuma cor favorita.'
    }
}
let corFav = corFavorita('verde')

console.log(corFav)
console.log(typeof(corFav))

console.log('===============================================================')

function mostraConsole() {
    return 'funcao que mostra uma string no console.'
}
console.log(mostraConsole())

console.log('================================================================')
