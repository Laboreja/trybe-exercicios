// Exercício 1
// let fatorial = 2;

// for (let i = 1; i <= 10; i++) {
//  fatorial = fatorial * i;
//    if (fatorial = 3628800) {
//        break
//    }
// }
//
// console.log(fatorial);

// Exercício 2
// let word = "tô fritando o côco";
// let newWord = "";
//
// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += word[i];
// }
//
// console.log(newWord);

// Exercício 3
let array = ["java", "javascript", "python", "html", "css"];
let maior = array[0];
let menor = array[0];

for (i = 0; i < array.length; i++) {
  if (maior.length < array[i].length) {
    maior = array[i];
  }
}

console.log(maior);

for (let i = 1; i < array.length; i++) {
    if (menor.length > array[i].length) {
      menor = array[i];
    }
  }

console.log(menor);
