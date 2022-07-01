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

// Espaçamento entre as linhas do texto:
function espacamentoLinha(espacamentoL) {
    texto.style.lineHeight = espacamentoL;
}

espacamentoLinha("25px");

// Tipo da fonte (font family):
function familiaFonte(familia) {
    texto.style.fontFamily = familia;
}

familiaFonte("Verdana, Arial, sans-serif");