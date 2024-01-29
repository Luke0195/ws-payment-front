import validator from '../validators'

export class Formatters {
  notEmptyStringOrDefault(value: any, defautValue = '-'): string {
    return validator.isString(value) && value !== ''
      ? String(value).trim()
      : defautValue
  }
}

export default new Formatters()
