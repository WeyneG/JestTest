const numPrimo = require('../funcoes/numPrimo');

test('deve retornar true para um número primo', () => {
    expect(numPrimo(3)).toBe(true);
});

test('deve retornar false para um número não primo', () => {
    expect(numPrimo(6)).toBe(false);
});
