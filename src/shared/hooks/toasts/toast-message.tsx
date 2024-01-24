import { toast } from 'react-toastify'

export const showWarningMessage = (errorMessage: string): void => {
  toast.error(errorMessage)
}

export const showSuccessMessage = (toastMessage: string): void => {
  toast.success(toastMessage)
}
