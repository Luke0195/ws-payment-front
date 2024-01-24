import * as yup from 'yup'

const schema = () => {
  return yup.object({
    name: yup.string().required('O campo nome é obrigatório'),
  })
}

export { schema }
