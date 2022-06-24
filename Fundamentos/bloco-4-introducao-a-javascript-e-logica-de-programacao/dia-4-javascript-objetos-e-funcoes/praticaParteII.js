// Exercício 1
function reverta(palavra) {
  novaPalavra = palavra.split("").reverse().join("");
  if (palavra === novaPalavra) {
    console.log("true");
  } else {
    console.log("false");
  }
}

reverta("arara");
reverta("prato");
