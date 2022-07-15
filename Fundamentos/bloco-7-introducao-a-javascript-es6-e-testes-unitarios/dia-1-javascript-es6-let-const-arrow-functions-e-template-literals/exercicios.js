// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// Exercício 2 - Referência: https://stackoverflow.com/questions/7000851/how-to-sort-numbers-correctly-with-array-sort
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescente = (array) => array.sort((a, b) => a - b)

console.log(crescente(oddsAndEvens));