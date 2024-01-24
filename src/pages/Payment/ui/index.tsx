import { useState } from 'react'
import { Header, WarningMessage } from '@app/components'
import { Form, FormField, Input, Button, Loader } from '@app/libs/semantic-ui'
import { useForm, Controller } from '@app/libs/react-hook-form'
import { yupResolver } from '@app/libs/yup'
import {
  createPaymentService as service,
  PaymentForm,
  schema,
  parseData,
} from '@app/features/payment'
import {
  showSuccessMessage,
  showWarningMessage,
} from '@app/shared/hooks/toasts'

import * as S from './styles'

export const Payment = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(schema()),
    defaultValues: parseData(null),
    reValidateMode: 'onBlur',
    mode: 'all',
  })

  const onSubmit = async (data: PaymentForm): Promise<void> => {
    setLoading(true)
    try {
      await service(data)
      showSuccessMessage('Pagamento criado com sucesso.')
    } catch (error: any) {
      showWarningMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Container>
      <Header
        title="Pagamentos"
        description="Utilize os recursos abaixo  para criar tipo de pagamento."
      />
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField error={errors.name?.message}>
            <label> Nome </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input placeholder="Informe o nome do pagamento" {...field} />
              )}
            />
            {errors.name && (
              <WarningMessage text={errors.name.message || '-'} />
            )}
          </FormField>
          <Button
            color={!isValid || loading ? 'grey' : 'purple'}
            disabled={!isValid || loading}>
            {loading ? <Loader /> : <span> Salvar</span>}
          </Button>
        </Form>
      </div>
    </S.Container>
  )
}
