import { createContext, useContext } from 'react'
import { ContextError } from '@app/shared/errors'
import { NotificationsProps } from '../interfaces'
import { QueryObserverResult } from '@tanstack/react-query'

type StateAction<T> = React.Dispatch<React.SetStateAction<T>>

interface ContextProps {
  notifications: NotificationsProps
  setNotifications: StateAction<NotificationsProps>
  refetch: () => Promise<QueryObserverResult<any, Error>>
}

export const Context = createContext({} as ContextProps)

export function useClientContext() {
  const context = useContext(Context)
  if (!context)
    throw new ContextError('You must provided Context between the component')
  return context
}
