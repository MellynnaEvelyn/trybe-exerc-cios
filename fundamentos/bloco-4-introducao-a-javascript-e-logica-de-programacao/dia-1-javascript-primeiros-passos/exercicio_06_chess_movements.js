// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const piece = "RAINHA";

switch (piece.toLowerCase()) {
    case "peão":
        console.log("Peão: se movem somente para frente, uma casa por vez. Obs: com exceção na primeira vez que um peão é movido, quando ele pode se mover duas casas."); 
        break;

    case "bispo":
        console.log("Bispo: move qualquer número de quadrados vagos na diagonal em uma linha reta");
        break;

    case "rainha":
        console.log("Rainha: move qualquer número de quadrados vagos em qualquer direção: para frente, para trás, para a esquerda, para a direita ou diagonalmente, em linha reta.");
        break;

    case "rei":
        console.log("Rei: move exatamente uma casa vazia em qualquer direção: para frente, para trás, esquerda, direita ou diagonal");
        break;

    case "cavalo":
        console.log("Cavalo: move-se em uma diagonal estendida de um canto de qualquer retângulo de quadrados 2 × 3 até o canto oposto mais distante");
        break;

    case "torre":
        console.log("Torre: move qualquer número de quadrados vagos para frente, para trás, para a esquerda ou para a direita em uma linha reta");
        break;

    default:
        console.log("erro: peça não identificada");
}
