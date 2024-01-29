class Validator {
  constructor() {}

  isString(value: any): boolean {
    return typeof value === 'string'
  }

  isNumber(value: any): boolean {
    return typeof value === 'number'
  }
}

export default new Validator()
