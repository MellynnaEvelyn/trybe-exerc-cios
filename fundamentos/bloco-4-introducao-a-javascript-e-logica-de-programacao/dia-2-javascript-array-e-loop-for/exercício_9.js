// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let numbersAte25 = [];
for (let index = 1; index <= 25; index += 1) {
    numbersAte25.push(index);
}
console.log('Valores de 1 até 25: ', numbersAte25);

let divididoPor2 = [];
for (let index2 = 0; index2 < numbersAte25.length; index2 +=1){
    divididoPor2.push(index2 / 2);
}
console.log('Números até 25 divididos por 2 é igual a:', divididoPor2);