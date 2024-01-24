import { axios } from '@app/libs/axios'
import { PaymentForm } from '../index'
import { PaymentModel } from '@app/entities/payment-model'

export const createPaymentService = async (
  data: PaymentForm,
): Promise<PaymentModel> => {
  try {
    const response: PaymentModel = await axios.post('/payment', data)
    if (typeof response !== 'object') throw new Error('Invalid response')
    return response
  } catch (error: any) {
    throw new Error(error)
  }
}
