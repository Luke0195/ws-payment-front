import { IconType } from 'react-icons'

type ComponentProps = {
  icon: IconType
}

export function CardIcon(props: ComponentProps) {
  const { icon: Component } = props
  return Component
}
