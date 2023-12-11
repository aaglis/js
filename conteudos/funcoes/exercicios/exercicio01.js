function terceiraIdadae(idade) {
    if(typeof(idade) != 'number') {
        return 'Digite um número, com valor correspondente à sua idade.'
    }
    else if(idade >= 60){
        return true
    }
    else {
        return false
    }
}

console.log(terceiraIdadae(62))