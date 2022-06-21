const pecaXadrez = "Rei".toLowerCase();

if (pecaXadrez === "peao") {
    console.log("Dois à frente");
}
else if (pecaXadrez === "bispo") {
    console.log("Diagonal");
}
else if (pecaXadrez === "torre") {
    console.log("Vertical e horizontal");
}
else if (pecaXadrez === "cavalo") {
    console.log("Formato de L");
}
else if (pecaXadrez === "rainha") {
    console.log("Diagonal, vertical e horizontal");
}
else if (pecaXadrez === "rei") {
    console.log("Um ao seu redor");
}
else {
    console.log("Erro: Isso não é uma peça de xadrez");
}