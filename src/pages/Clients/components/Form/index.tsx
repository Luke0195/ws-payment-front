import { Form as SemanticForm, FormField, Button } from '@app/libs/semantic-ui'
import clientService from '@app/features/clients/services'
import InputMask from 'react-input-mask'
import { useForm, Controller } from '@app/libs/react-hook-form'
import { FormData } from '@app/features/clients/interfaces'
import { Grid, Loader } from 'semantic-ui-react'
import * as S from '../../ui/styles'
import { labels } from './labels'
import { useClientContext } from '../../context'
import {
  showSuccessMessage,
  showWarningMessage,
} from '@app/shared/hooks/toasts'
import { useState } from 'react'

export function Form() {
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormData>({})
  const { setNotifications, refetch } = useClientContext()

  const onSubmit = async (data: FormData): Promise<void> => {
    setLoading(true)
    try {
      await clientService.createClient(data)
      showSuccessMessage('Ação realizada com sucesso!')
      setNotifications((prev) => {
        prev.registerModal = null
        return { ...prev }
      })
      refetch()
    } catch (error) {
      showWarningMessage('Ocorreu um erro ao realizar há ação')
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.FormContainer>
      <header>
        <h2> Cadastrar do Cliente</h2>
      </header>
      <SemanticForm onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <FormField>
                <label>Nome</label>
                <input placeholder={labels.name} {...register('name')} />
              </FormField>
            </Grid.Column>

            <Grid.Column width={8}>
              <FormField>
                <label>Cpf</label>
                <Controller
                  name="code"
                  control={control}
                  render={({ field }) => (
                    <InputMask
                      {...register('code')}
                      mask={'999.999.999-99'}
                      placeholder="Informe o teleone"
                      {...field}
                    />
                  )}
                />
              </FormField>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <FormField>
                <label>Email</label>
                <input placeholder={labels.email} {...register('email')} />
              </FormField>
            </Grid.Column>

            <Grid.Column width={8}>
              <FormField>
                <label>Telefone</label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <InputMask
                      {...register('phone')}
                      mask={'(99)99999-9999'}
                      placeholder="Informe o teleone"
                      {...field}
                    />
                  )}
                />
              </FormField>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={'equal'}>
            <Grid.Column>
              <FormField>
                <label>Endereço</label>
                <input placeholder={labels.address} {...register('address')} />
              </FormField>
            </Grid.Column>

            <Grid.Column>
              <FormField>
                <label>Cidade </label>
                <input placeholder={labels.city} {...register('city')} />
              </FormField>
            </Grid.Column>
            <Grid.Column>
              <FormField>
                <label>Bairro </label>
                <input
                  placeholder={labels.sublocallity}
                  {...register('sub_locality')}
                />
              </FormField>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <S.Toolbar>
          <Button
            content="Cancelar"
            onClick={() =>
              setNotifications((prev) => {
                prev.registerModal = null
                return { ...prev }
              })
            }
          />
          <Button color="purple" disabled={!isValid || loading}>
            {loading ? <Loader active /> : 'Salvar'}
          </Button>
        </S.Toolbar>
      </SemanticForm>
    </S.FormContainer>
  )
}
