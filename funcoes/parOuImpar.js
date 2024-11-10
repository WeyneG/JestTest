function parOuImpar(numero) {
    if (typeof numero !== 'number') {
        throw new Error("Entrada inválida. Por favor, insira um número.");
    }

    return numero % 2 === 0 ? 'par' : 'ímpar';
}

module.exports = parOuImpar;