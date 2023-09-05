const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //Remover o último elemento do vetor
console.log(pilotos)

pilotos.push('Verstappen') //Add um elemento na última posição
console.log(pilotos) 

pilotos.shift() //Remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //Add um elemento no final
console.log(pilotos)

//splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //remover o massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir do índice 2 vo vetor pilotos
console (algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //cria um novo vetor do indice 1 até a 3. Até o indice 4.
console (algunsPilotos2)

