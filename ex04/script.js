let idade = Number(prompt("Digite a sua idade:"));
let estudante = prompt("Você é estudante? (sim/não):");
let valor;
if (idade < 12 || idade > 60 || estudante === "sim") {
    valor = 20;
} else {
    valor = 40;
}
alert("O valor do ingresso é: R$" + valor.toFixed(2));
