var pessoa = {
    nome: 'Aglis',
    idade: 18,
}

console.log(pessoa.nome, pessoa.idade)
console.log("==================================")

var quadrado = {

    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    /*are(lado) {
        return lado * lado
    }*/
    perimetro: function(lado) {
        return this.lados * lado
    }

}

console.log(quadrado.lados, quadrado.area(5), quadrado.perimetro(5))

console.log("==================================")

