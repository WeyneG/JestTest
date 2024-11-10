const contagem = require('../funcoes/contagem');

test('deve contar os números corretamente entre o menor e maior valor do conjunto', () => {
    expect(contagem(5, [3, 1, 4, 1, 5])).toBe(5);
});

test('deve contar corretamente quando todos os elementos são iguais', () => {
    expect(contagem(5, [2, 2, 2, 2,2])).toBe(5);
});
