var dados = {
    nome: 'Aglis',
    sobrenome: 'Bernardino da Silva',
    idade: 18,
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },
}
console.log('Meus dados pessoais:')
console.log(`nome: ${dados.nome} ${dados.sobrenome}\nidade: ${dados.idade}`)
console.log(`metodo de nome completo: ${dados.nomeCompleto()}`)

console.log("==================================")

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

console.log(`preço do carro antes: ${carro.preco}`)
carro.preco = 3000

console.log(`preço do carro depois: ${carro.preco}`)

console.log("==================================")

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    lartir(pessoa) {
        if(pessoa == 'homem') {
            return `late`
        }
        else {
            return `Não late`
        }
    },
}


console.log(cachorro.lartir('homem'))
