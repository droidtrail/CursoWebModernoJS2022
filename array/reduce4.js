/**
 https://www.youtube.com/watch?v=O_bSjsLga48
 */

const numeros = [10, 20, 30, 40, 50];
const total = numeros.reduce((total, item) => {
    console.log(total)
    console.log(item)
    return total + item
})
console.log(total)
/*
2 - [Array de Strings]
*/

const palavras = ['oi', 'Olaaa', 'paralelepipedo']
const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
    if (palavraAtual.length > maiorPalavra.length) {
        return palavraAtual
    }
    return maiorPalavra

}, '')//A maior palavra começa com a String vazia ('')
console.log('aaa', maiorPalavra)