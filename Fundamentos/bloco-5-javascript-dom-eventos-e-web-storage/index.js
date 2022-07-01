// Cor de fundo da tela:
let corpo = document.getElementById("corpo");

function corFundo(color) {
  corpo.style.backgroundColor = color;
}

corFundo("pink");

// Cor do texto:
let texto = document.getElementById("textao");

function corTexto(color) {
  texto.style.color = color;
}

corTexto("white");

// Tamanho da fonte:
function tamanhoTexto(tamanho) {
  texto.style.fontSize = tamanho;
}

tamanhoTexto("30px");
