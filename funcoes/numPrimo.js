function numPrimo(n) {
    if (isNaN(n) || n <= 1) {
        throw new Error("Por favor, digite um número válido maior que 1.");
    }

    let div = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            div++;
        }
    }

    return div === 2;
}

module.exports = numPrimo;