const calculadora = require('./calculadora')

test('2 + 2 deve ser igual a 4', () => {
    expect(calculadora.soma(2, 2)).toBe(4)
})


test('2 - 2 deve ser igual a 0', () => {
    expect(calculadora.subtracao(2, 2)).toBe(0)
})

test('2 * 2 deve ser igual a 4', () => {
    expect(calculadora.multiplicacao(2, 2)).toBe(4)
})

test('2 / 2 deve ser igual a 1', () => {
    expect(calculadora.divisao(2, 2)).toBe(1)
})