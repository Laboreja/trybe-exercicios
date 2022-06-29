// Exercício 1
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let sauda in names) {
    console.log("Olá " + names[sauda]);
}

// Exercício 2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020,
}

for (let i in car) {
    console.log(car[i]);
}