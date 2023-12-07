let nome = 'Aglis'
let estouCursandoFacul = false

if(estouCursandoFacul) {
    console.log(`${nome} está cursando faculdade!`)
}
else {
    console.log(`${nome} não está cursando faculdade!`)
}


/* 
    CONDIÇÕES QUE RETORNTAM FALSO:
    
    if(false)
    if(0)
    if(NaN)
    if(null)
    if(undefined)
    if('')

*/

/* 
    OPERADORES LOGIOS

    E(&&)
   -Retorna o ÚLTIMO valor verdadeiro da expressão, caso o resultado
    da expressão seja VERDADEIRO, ou o PRIMEIRO FALSO, caso a expressão seja FALSA.
    exemplo:

   'Gato' && 'Cão' -> 'Cão'

   ===================================================================

   OU(||)
   -Retorna o PRIMEIRO valor verdadeiro da expressão, caso tenha algum
    elemento VERDADEIRO dentro da expressão, ou o ÚLTIMO FALSO, caso a expressão seja FALSA.
    exemplo:

  'Gato' || 'Cão' ->  'Gato'  
  
*/