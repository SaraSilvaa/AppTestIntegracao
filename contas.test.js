const contas = require('./contas');

test("Soma 2+5 esperando 7 como resultado",()=>{
    expect(contas.soma(2,5)).toBe(7)
})