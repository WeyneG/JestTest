function fibonacci(n) {
    if (n <= 0 || isNaN(n)) {
        throw new Error("Por favor, digite um número válido.");
    }

    let a = 0, b = 1;
    const resultado = [];

    for (let i = 0; i < n; i++) {
        resultado.push(a);
        const c = a + b;
        a = b;
        b = c;
    }

    return resultado;
}

module.exports = fibonacci;