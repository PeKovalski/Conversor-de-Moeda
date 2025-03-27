async function converter() {
    const valor = document.getElementById("valor").value;
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const resultado = document.getElementById("resultado");

    if (valor === "" || isNaN(valor) || valor <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        return;
    }

    // Tabela de conversão fixa
    const taxas = {
        "USD": { "BRL": 5.0, "EUR": 0.91, "GBP": 0.76, "USD": 1 },
        "BRL": { "USD": 0.20, "EUR": 0.18, "GBP": 0.15, "BRL": 1 },
        "EUR": { "USD": 1.10, "BRL": 5.50, "GBP": 0.84, "EUR": 1 },
        "GBP": { "USD": 1.32, "BRL": 6.50, "EUR": 1.19, "GBP": 1 }
    };

    const taxa = taxas[moedaOrigem][moedaDestino];
    const valorConvertido = (valor * taxa).toFixed(2);
    resultado.innerText = `Resultado: ${valor} ${moedaOrigem} = ${valorConvertido} ${moedaDestino}`;
}

