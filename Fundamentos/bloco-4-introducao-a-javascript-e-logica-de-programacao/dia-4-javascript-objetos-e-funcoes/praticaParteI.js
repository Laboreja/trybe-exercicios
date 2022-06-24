// Exercício 1 & Exercício 2
// let info1 = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//   recorrente: "Sim",
// };

// console.log("Bem-vinda, " + info.personagem);

// Exercício 2
// console.log(info);

// Exercício 3
// for (i in info) {
//     console.log(i);
// }

// Exercício 4
// for (i in info) {
//   console.log(info[i]);
// }

// Exercício 5
// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim",
// };

// console.log(info1.personagem + " e " + info2.personagem);
// console.log(info1.origem + " e " + info2.origem);
// console.log(info1.nota + " e " + info2.nota);

// if (info1.recorrente === info2.recorrente) {
//   console.log("Ambos recorrentes");
// } else {
//   console.log(">:(");
// }

// Exercício 6
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + "'" + leitor["livrosFavoritos"][0].titulo + "'.");