// Exercício 1

const fatorial = (numero) => {
  if (numero < 0) return -1;
  else if (numero == 0) return 1;
  else {
    return numero * fatorial(numero - 1);
  }
};

console.log(fatorial(5));

// Exercício 2

const longer = (jamal, jamalius) => (jamalius.length > jamal.length) ? jamalius : jamal; 

const longestWord = (frase) => {
  let palavras = frase.split(" ");
  return palavras.reduce(longer);
};

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
