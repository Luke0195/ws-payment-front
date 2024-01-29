import validator from './index'
describe('Validator', () => {
  it('isString should return true when a valid value is provided', () => {
    const result = validator.isString('any_value')
    expect(result).toBe(true)
  })

  it('is String should return false when an invalid value is provided', () => {
    const result = validator.isString(null)
    expect(result).toBe(false)
  })
})
