const valorCusto = 100;
const valorVenda = 150;

const impostoSobreOCusto = (valorCusto * 0.20);
const valorCustoTotal = (valorCusto + impostoSobreOCusto);
const lucro = (valorVenda - valorCustoTotal);

const lucroVendaMassiva = (lucro * 1000);

if (valorCusto > 0 || valorVenda > 0) {
    console.log(lucroVendaMassiva);
}
else {
    console.log("Insira valores maiores do que 0");
}