/**
 https://www.youtube.com/watch?v=dckGT8Rts-4
 */

 const rockets = [
    {country: "Russia", launches:32},
    {country: "US", launches:23},
    {country: "China", launches:16},
    {country: "Europa", launches:7},
    {country: "India", launches:4},
    {country: "Japão", launches:3},
 ]

 const totalLaunches = rockets.reduce((valorAnterior, elemAtual)=>valorAnterior + elemAtual.launches, 0)//zero é o valor inicial da variável valorAnterior
 console.log(`Total de lançamentos de todos os países: ${totalLaunches}`)
 