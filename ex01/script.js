    let valor = Number(prompt("Digite o valor do carro:"));

    let opcao = Number(prompt("Qual a forma de pagamento? [1- PIX, 2-Cartão, 3-Financiamento]"));
    let valorFinal;
    let parcelas;
    let valorParcela;
    
    {
        if (opcao === 1) {
        valorFinal = valor * 0.85
        alert("Valor final a vista (PIX): R$" + valorFinal.toFixed(2));
          // PIX = 15% de desconto
    }
    else if (opcao === 2) {
        parcelas = Number(prompt("Quantas parcelas? (Até 24)"));
        valorFinal = valor * 1.05;
        valorParcela = valorFinal / parcelas;

        alert("Valor final do cartão: R$ " + valorFinal.toFixed(2));
        alert("Parcela: " + parcelas + " de R$" + valorParcela.toFixed(2));
        // Financeamento = 20% de juros + parcelas
    }
    else if (opcao === 3) {
    parcelas = Number(prompt("Quantas parcelas? (até 48)"));
    valorFinal = valor * 1.20;
    valorParcela = valorFinal / parcelas;

    alert("Valor final do financiamento: R$ " + valorFinal.toFixed(2));
    alert("Parcelas: " + parcelas + " de R$ " + valorParcela.toFixed(2));

    }
    else 
        alert("Opção Inválida!")
}