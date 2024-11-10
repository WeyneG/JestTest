const divisorComum = require('../funcoes/divisorComum');

test('deve retornar o MDC correto para dois números positivos', () => {
    expect(divisorComum(48, 18)).toBe(6);
});

test('deve retornar o MDC correto para dois números negativos', () => {
    expect(divisorComum(-48, -18)).toBe(6);
});
