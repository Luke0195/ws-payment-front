import { createContext, useContext } from 'react'
import { ContextError } from '@app/shared/errors'

type StateAction<T> = React.Dispatch<React.SetStateAction<T>>

interface ContextProps {
  registerModal: {
    showRegisterModal: JSX.Element | null
    setShowRegisterModal: StateAction<JSX.Element | null>
  }
}

export const Context = createContext({} as ContextProps)

export function useClientContext() {
  const context = useContext(Context)
  if (!context)
    throw new ContextError('You must provided Context between the component')
  return context
}
