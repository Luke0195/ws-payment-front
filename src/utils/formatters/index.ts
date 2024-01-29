import validator from '../validators'

export class Formatters {
  notEmptyStringOrDefault(value: any, defautValue = '-'): string {
    return validator.isString(value) && value !== ''
      ? String(value).trim()
      : defautValue
  }

  numberOrDefault(value: any, defaultValue = 0): number {
    return validator.isNumber(value) && value > 0 ? value : defaultValue
  }
}

export default new Formatters()
