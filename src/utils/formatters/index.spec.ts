import formatters from './index'

describe('Formatters', () => {
  it('notEmptyStringOrDefault should return a value when value is valid', () => {
    const result = formatters.notEmptyStringOrDefault(null)
    expect(result).toEqual('-')
  })
})
