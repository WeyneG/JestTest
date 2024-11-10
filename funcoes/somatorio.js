function somatorio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new Error("Entrada inválida. Por favor, insira um vetor.");
    }

    let soma = 0;

    for (const num of numeros) {
        if (typeof num !== 'number') {
            throw new Error("Digite apenas números no vetor.");
        }
        soma += num;
    }

    return soma;
}

module.exports = somatorio;