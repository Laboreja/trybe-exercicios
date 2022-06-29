// Exercício 1
// function reverta(palavra) {
//   let novaPalavra = palavra.split("").reverse().join("");
//   if (palavra === novaPalavra) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// reverta("arara");
// reverta("prato");

// Exercício 2
// function maior(arr) {
//   return Math.max.apply(null, arr);
// }

// console.log(maior([1, 2, 6, 7, 4]));

// Exercício 3
// function menor(arr) {
//     return Math.min.apply(null, arr);
//   }
  
//   console.log(menor([2, 6, 7, 4]));

// Exercício 4 - Falha

// Exercício 5 
let valores = [2, 3, 2, 5, 8, 2, 3];
function duplicatas(array) {
    const dup = Object.create(null);
    
    for (const str of array) {
      if (dup[str]) {
        dup[str] += 1;
      } else {
        dup[str] = 1;
      }
    }
    
    return dup;
  }

console.log(duplicatas(valores));