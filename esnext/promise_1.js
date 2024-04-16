const primeiroElemento = (string) => string [0]
const primeiraLetra = (string) => string [0]
const letraMinuscula = letra =>letra.toLowerCase()

let p = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)//Primeiro nome do array: Ana
    .then(primeiraLetra)//Primeira letra no nome Ana.
    .then(letraMinuscula)//Primeira letra no nome Ana.
    .then(console.log)
