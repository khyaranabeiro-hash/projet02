let salario = parseFloat(prompt("Digite seu salário bruto:"));
let valorParcela = parseFloat(prompt("Valor da parcela desejada:"));
let limiteParcela = salario * 0.30;

if (valorParcela > limiteParcela) {
    console.log("Empréstimo Negado: Parcela muito alta (excede 30% do salário).");
} else {
    console.log("Empréstimo Pré-aprovado.");
}
