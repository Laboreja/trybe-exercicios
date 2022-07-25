const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Exercício 1
function authorBornIn1947() {
  const ano = books.find((ano) => ano.author.birthYear == 1947);
  return ano;
}

// Exercício 2
function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// Exercício 3
function getNamedBook() {
  const maior = books.find((maiorNome) => maiorNome.name.length == 26);
  return maior;
}

// Exercício 4
function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => {
    a.releaseYear - b.releaseYear;
  });
}

// Exercício 5
function everyoneWasBornOnSecXX() {
  return books.every((seculo) => String(seculo.author.birthYear)[1] === "9");
}

// Exercício 6
function someBookWasReleaseOnThe80s() {
  return books.some((oitentas) => String(oitentas.releaseYear)[2] === "8");
}

// Exercício 7
function authorUnique() {
  // escreva seu código aqui
}
