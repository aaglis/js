function verificarValor(valor){

    if(valor) {

        return `tem valor.\nvalor: ${valor}`
    }
    else {
        return `não tem valor.`
    }

}

console.log(verificarValor(10))
console.log("===========================")

function calcularPerimetro(lado) {
    let resultado = lado * 4
    return `valor do lado: ${lado}\nresultado do perimetro: ${resultado}`
}

console.log(calcularPerimetro(5))
console.log("===========================")


function nomeCompleto(nome, sobrenome) {
    return `nome completo: ${nome} ${sobrenome}`
}

console.log(nomeCompleto('Aglis', 'Bernardino da Silva'))
console.log("===========================")

function verificarPar(numero) {
    if(typeof(numero) != 'number') {
        return `O valor digitado não é reconhecido como número.`
    }
    if(numero % 2 == 0) {
        return `O numero ${numero} é par.`
    }
    else {
        return `O numero ${numero} não é par.`
    }
}

console.log(verificarPar(2))
console.log("===========================")

function tipoDeDado(dadoDigitado) {

    console.log(`tipo do dado: ${typeof(dadoDigitado)}`)

}

tipoDeDado(15)
console.log("===========================")

var totalPaises = 193
function precisoVisitar(paisesVisitados) {
    return `ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}

function jaVisitei(paisesVisitados) {
    return `ja visitei ${paisesVisitados} do total de ${totalPaises} paises.`
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))

console.log("===========================")


