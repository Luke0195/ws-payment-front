import { PaymentForm } from '..'

const makePaymentWithDefaultData = (): PaymentForm => {
  return { name: '' }
}

const makePaymentWithValidData = (data: PaymentForm): PaymentForm => {
  return { name: data.name }
}

export const parseData = (data: any): PaymentForm => {
  return data === null
    ? makePaymentWithDefaultData()
    : makePaymentWithValidData(data)
}
