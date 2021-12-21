const {parseTo} = require('./buscojobs');

jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-01-01').getTime());

test('parseTo when array is empty', () => {
    const xml = `<buscojobs></buscojobs>`
    expect(parseTo([])).toBe(xml)
})

test('parseTo when array is one job', () => {
    const xml = `<buscojobs><jobs><job><title>Estágio</title><date>31/12/2021</date><time>21:00:00</time><channels></channels></job></jobs></buscojobs>`
    expect(parseTo([{ 'Título': 'Estágio' }])).toBe(xml)
})