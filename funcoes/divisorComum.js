function divisorComum(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error("Por favor, digite números válidos.");
    }

    n1 = Math.abs(n1);
    n2 = Math.abs(n2);

    let resto;
    while (n2 !== 0) {
        resto = n1 % n2;
        n1 = n2;
        n2 = resto;
    }

    return n1;
}

module.exports = divisorComum;