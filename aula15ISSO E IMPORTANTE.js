let num = [5, 8, 2, 9, 3];
num.push(1) /*adiciona um numero */
num.sort()/* DEIXA EM ORDEM NUMERICA*/
console.log(num)
console.log(`o vetor tem ${num.length} posicoes`); /*length mostra quantas posicoes tem uma array*/ 
console.log(`o primeiro valor do vetor é ${num[1]}`)/* mostra qual e o numero da posiçao*/
let pos = num.indexOf(3) /*procura a posição do nuemro no caso e 9*/
if (pos === -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`o valor está na posição ${pos} `)
}
