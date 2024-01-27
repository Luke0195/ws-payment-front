import * as yup from 'yup'

const schema = () => {
  return yup.object({
    name: yup.string().required('O campo nome é obrigatório'),
    code: yup.string().required('O campo code é obrigatório'),
    email: yup
      .string()
      .required('O campo email é obrigatório')
      .email('Email inválido!'),
    phone: yup.string().required('O campo telefone é obrigatório'),
    address: yup.string().required('O campo endereço é obrigatório'),
    sub_locality: yup.string().required('O campo bairro é obrigatório'),
    city: yup.string().required('O campo cidade é obrigatório'),
  })
}

export { schema }
