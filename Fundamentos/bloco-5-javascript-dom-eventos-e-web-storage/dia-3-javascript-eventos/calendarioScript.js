function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let lista1 = document.getElementsByTagName("ul");
lista1.id = "days";

function diasCriando() {
  for (let i = 0; i <= 32; i += 1) {
    dias = document.createElement("li");
    dias.innerHTML = decemberDaysList[i];
    document.getElementById("days").appendChild(dias);
    dias.className = "day";
  }
}
diasCriando(lista1);

let osDias = document.getElementsByClassName("day");

osDias[25].classList.add("holiday");
osDias[26].classList.add("holiday");
osDias[32].classList.add("holiday");

osDias[5].classList.add("friday");
osDias[12].classList.add("friday");
osDias[19].classList.add("friday");
osDias[26].classList.add("friday");

// Exercício 2

let botoesContainer = document.getElementsByClassName("buttons-container")[0];

function feriaDinamicos() {
  botao = document.createElement("div");
  botao.id = "btn-holiday";
  botao.innertext = "Feriados";
  botoesContainer.appendChild(botao);
}
feriaDinamicos();

// Exercício 3

feriadinhos1 = document.getElementsByClassName("holiday")[0];
feriadinhos2 = document.getElementsByClassName("holiday")[1];
feriadinhos3 = document.getElementsByClassName("holiday")[2];
function corzinha() {
    feriadinhos1.style.backgroundColor = 'red';
    feriadinhos2.style.backgroundColor = 'red';
    feriadinhos3.style.backgroundColor = 'red';
}
botao.addEventListener('click', corzinha);