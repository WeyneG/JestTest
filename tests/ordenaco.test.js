const ordenacao = require('../funcoes/ordenacao');

test('deve ordenar um vetor de números corretamente', () => {
    expect(ordenacao([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
});

test('deve lançar erro para entrada inválida (vetor vazio)', () => {
    expect(() => ordenacao([])).toThrow("Entrada inválida. Por favor, digite um vetor.");
});
