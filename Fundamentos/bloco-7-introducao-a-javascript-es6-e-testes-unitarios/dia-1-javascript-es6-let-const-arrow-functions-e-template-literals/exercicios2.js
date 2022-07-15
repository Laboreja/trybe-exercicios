// Exercício 1

const fatorial = (numero) => {
  if (numero < 0) return -1;
  else if (numero == 0) return 1;
  else {
    return numero * fatorial(numero - 1);
  }
};

console.log(fatorial(5));

// Exercício 2 - referência: https://stackoverflow.com/questions/17386774/javascript-find-longest-word-in-a-string

const longer = (jamal, jamalius) =>
  jamalius.length > jamal.length ? jamalius : jamal;

const longestWord = (frase) => {
  let palavras = frase.split(" ");
  return palavras.reduce(longer);
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

// Exercício 4
const trocaX = (nome) => {
  const frase = "Tryber x aqui!";
  fraseFinal = frase.replace("x", nome);
  return fraseFinal;
};

console.log(trocaX("Bebeto"));

const concatenaFrases = () => {
  const skills = ["HTML", " JavaScript", " DOM"];
  let fraseFinalFinal = `${trocaX(
    "Bebeto"
  )} Minhas três principais habilidades são: ${skills}`;
  return fraseFinalFinal;
};

console.log(concatenaFrases());
