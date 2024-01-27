import { Form as SemanticForm, FormField, Button } from '@app/libs/semantic-ui'
import { Grid } from 'semantic-ui-react'
import * as S from '../../ui/styles'
import { labels } from './labels'

export function Form() {
  return (
    <S.FormContainer>
      <header>
        <h2> Cadastrar do Cliente</h2>
      </header>
      <SemanticForm>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <FormField>
                <label>Nome</label>
                <input placeholder={labels.name} />
              </FormField>
            </Grid.Column>

            <Grid.Column width={8}>
              <FormField>
                <label>Cpf/Cnpj</label>
                <input placeholder={labels.code} />
              </FormField>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <FormField>
                <label>Email</label>
                <input placeholder={labels.email} />
              </FormField>
            </Grid.Column>

            <Grid.Column width={8}>
              <FormField>
                <label>Telefone</label>
                <input placeholder={labels.phone} />
              </FormField>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={'equal'}>
            <Grid.Column>
              <FormField>
                <label>Endereço</label>
                <input placeholder={labels.address} />
              </FormField>
            </Grid.Column>

            <Grid.Column>
              <FormField>
                <label>Cidade </label>
                <input placeholder={labels.city} />
              </FormField>
            </Grid.Column>
            <Grid.Column>
              <FormField>
                <label>Bairro </label>
                <input placeholder={labels.sublocallity} />
              </FormField>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <S.Toolbar>
          <Button content="Cancelar" />
          <Button color="purple"> Salvar </Button>
        </S.Toolbar>
      </SemanticForm>
    </S.FormContainer>
  )
}
