// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

const num1 = 10;
const num2 = 20;
const num3 = 30;

if(num1 > num2 && num1 > num3) {
    console.log(num1)
} else if(num2 > num1 && num2 > num3) {
    console.log(num2)
} else {
    console.log(num3)
}
