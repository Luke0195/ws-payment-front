import { FiServer } from 'react-icons/fi'
import { FaPaintBrush } from 'react-icons/fa'

export const getCurrentIconById = (objectId: number): JSX.Element => {
  return objectId === 0 ? (
    <FiServer size={20} color="1a1a1d" />
  ) : (
    <FaPaintBrush size={20} color="#1a1a1d" />
  )
}
