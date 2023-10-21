/**
 https://www.youtube.com/watch?v=IzlP3FJwA58
 */

 const data = require('../Data/database')
//6 - Imprima todos os nomes das espécies

function speciesNames(){
    return data.species.reduce((valorAnterior, valorAtual)=>{
        return [...valorAnterior, valorAtual.name]
    },[]) //Valor inicial. Nesse caso um array vazio que vai receber todos os nomes.
}
console.log(speciesNames())