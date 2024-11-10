const parOuImpar = require('../funcoes/parOuImpar');

test('deve retornar "par" para números pares', () => {
    expect(parOuImpar(4)).toBe('par');
    expect(parOuImpar(0)).toBe('par');
});

test('deve retornar "ímpar" para números ímpares', () => {
    expect(parOuImpar(3)).toBe('ímpar');
    expect(parOuImpar(-5)).toBe('ímpar');
});
