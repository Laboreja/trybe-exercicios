// Exercício 1
// function reverta(palavra) {
//   novaPalavra = palavra.split("").reverse().join("");
//   if (palavra === novaPalavra) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// reverta("arara");
// reverta("prato");

// Exercício 2
function maior(arr) {
  return Math.max.apply(null, arr);
}

console.log(maior([1, 2, 6, 7, 4]));
