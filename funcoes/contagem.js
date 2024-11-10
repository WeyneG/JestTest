function contagem(n, numeros) {
    if (isNaN(n) || n <= 0 || !Array.isArray(numeros) || numeros.length !== n) {
        throw new Error("Entrada inválida.");
    }

    const primeiro = numeros[0];
    const menor = Math.min(...numeros);
    const maior = Math.max(...numeros);

    let contagem = 0;
    for (const numero of numeros) {
        if (menor <= numero && numero <= maior) {
            contagem++;
        }
    }

    return contagem;
}

module.exports = contagem;
