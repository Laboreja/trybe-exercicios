// Exercício 6
// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }.
// Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map.
// Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  let media0 = grades[0].reduce((acc, curr) => {
    return acc + curr / grades[0].length;
  }, 0);
  let mediaRedonda0 = Math.round(media0 * 10) / 10;
  let media1 = grades[1].reduce((acc, curr) => {
    return acc + curr / grades[1].length;
  }, 0);
  let mediaRedonda1 = Math.round(media1 * 10) / 10;
  let media2 = grades[2].reduce((acc, curr) => {
    return acc + curr / grades[2].length;
  }, 0);
  let mediaRedonda2 = Math.round(media2 * 10) / 10;
  let mediaFinal = [[mediaRedonda0], [mediaRedonda1], [mediaRedonda2]];
  return students.reduce((acc, curr, i) => {
    return [...acc, curr, mediaFinal[i]]
  }, []);
}

console.log(studentAverage());

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];
console.log(expected)