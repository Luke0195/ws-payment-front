import formatters from './index'

describe('Formatters', () => {
  it('notEmptyStringOrDefault should return a value when value is valid', () => {
    const result = formatters.notEmptyStringOrDefault('any_value')
    expect(result).toEqual('any_value')
  })

  it('notEmptyStringOrDefault should return a defualt value when an invalid value is provided', () => {
    const result = formatters.notEmptyStringOrDefault(null)
    expect(result).toEqual('-')
  })
  it('numberOrDefault should return a value when value is valid', () => {
    const result = formatters.numberOrDefault(30, 0)
    expect(result).toBe(30)
  })

  it('numberOrDefault should return a defualt value when an invalid value is provided', () => {
    const result = formatters.numberOrDefault(null)
    expect(result).toEqual(0)
  })
})
