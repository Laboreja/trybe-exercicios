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
  botao1 = document.createElement("div");
  botao1.id = "btn-holiday";
  botao1.innerHTML = "Feriados";
  botoesContainer.appendChild(botao1);
}
feriaDinamicos();

// Exercício 3

feriadinhos1 = document.getElementsByClassName("holiday")[0];
feriadinhos2 = document.getElementsByClassName("holiday")[1];
feriadinhos3 = document.getElementsByClassName("holiday")[2];
function corzinha() {
  feriadinhos1.style.backgroundColor = "red";
  feriadinhos2.style.backgroundColor = "red";
  feriadinhos3.style.backgroundColor = "red";
}
botao1.addEventListener("click", corzinha);

// Exercício 4

function sextaDinamicos() {
  botao2 = document.createElement("div");
  botao2.id = "btn-friday";
  botao2.innerHTML = "Sexta-feira";
  botoesContainer.appendChild(botao2);
}
sextaDinamicos();

// Exercício 5

let sexta1 = document.getElementsByClassName("friday")[0];
let sexta2 = document.getElementsByClassName("friday")[1];
let sexta3 = document.getElementsByClassName("friday")[2];
let sexta4 = document.getElementsByClassName("friday")[3];
function textoSexta() {
  sexta1.innerHTML = "SEXTOU";
  sexta2.innerHTML = "SEXTOU";
  sexta3.innerHTML = "SEXTOU";
  sexta4.innerHTML = "SEXTOU";
}
botao2.addEventListener("click", textoSexta);

// Exercício 6

function zoomIn(event) {
  event.target.style.fontSize = "30px";
}

for (let i = 0; i < osDias.length; i++) {
  osDias[i].addEventListener("mouseover", zoomIn);
}

function zoomOut(event) {
  event.target.style.fontSize = "20px";
}

for (let i = 0; i < osDias.length; i++) {
  osDias[i].addEventListener("mouseout", zoomOut);
}

// Exercício 7
let tarefasContainer = document.getElementsByClassName("my-tasks")[0];

function tarefinhas(tarefa) {
  atarefado = document.createElement("span");
  tarefasContainer.appendChild(atarefado);
  atarefado.innerHTML = tarefa;
}
tarefinhas("Codar. Todo. Dia.");

// Exercício 8

function coloridinho(cor) {
  corzinhainha = document.createElement("div");
  tarefasContainer.appendChild(corzinhainha);
  corzinhainha.className = "my-tasks";
  corzinhainha.style.backgroundColor = cor;
}
coloridinho("red");
