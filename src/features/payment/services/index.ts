import { axios } from '@app/libs/axios'
import { PaymentForm } from '../index'
import { PaymentModel } from '@app/entities/payment-model'
import { InvalidRequest } from '@app/shared/errors'

export const createPaymentService = async (
  data: PaymentForm,
): Promise<PaymentModel> => {
  try {
    const response: PaymentModel = await axios.post('/payment', data)
    if (typeof response !== 'object')
      throw new InvalidRequest('Invalid response')
    return response
  } catch (error: any) {
    throw new InvalidRequest('Ocorreu um erro ao realizar há ação!')
  }
}
