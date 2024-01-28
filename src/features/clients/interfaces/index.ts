export interface HttpResponseInterface {
  id: string
  name: string
  code: string
  email: string
  phone: string
  address: string
  city: string
  sub_locality: string
}

export interface BodyInterface {
  id: string
  name: string
  code: string
  email: string
  phone: string
  address: string
  city: string
  sublocallity: string
  actions: JSX.Element | null
}

export interface FormData {
  name: string
  code: string
  email: string
  phone: string
  address: string
  sub_locality: string
  city: string
}
