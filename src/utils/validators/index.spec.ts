import { MdOutlineDoNotDisturbOnTotalSilence } from 'react-icons/md'
import validator from './index'
describe('Validator', () => {
  it('isString should return true when a valid value is provided', () => {
    const result = validator.isString('any_value')
    expect(result).toBe(true)
  })

  it('isString should return false when an invalid value is provided', () => {
    const result = validator.isString(null)
    expect(result).toBe(false)
  })

  it('isNumber should return true when a valid value is provided', () => {
    const result = validator.isNumber(0)
    expect(result).toBe(true)
  })
  it('isNumber should return true when a valid value is provided', () => {
    const result = validator.isNumber(MdOutlineDoNotDisturbOnTotalSilence)
    expect(result).toBe(false)
  })
})
