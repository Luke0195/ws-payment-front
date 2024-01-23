import { FiSearch } from 'react-icons/fi'
import { CardRoot } from './card-root'
import { getCurrentIconById } from '../helpers/get-current-icon'

type CardProps = {
  id: number
  type: string
  iconType: number
  textDescription: string
  techs: string[]
}

type ComponentProps = {
  card: CardProps
}

export function Card(props: ComponentProps) {
  return (
    <CardRoot.CardWrapper>
      <CardRoot.CardHeader>
        {getCurrentIconById(props.card.id)}
        <CardRoot.CardTitle>
          {' '}
          Sobre o projeto {props.card.type}.
        </CardRoot.CardTitle>
      </CardRoot.CardHeader>
      <CardRoot.CardContent>
        <span> {props.card.textDescription}</span>
        <span> Tecnológias usadas no desenvolviment {props.card.type}:</span>
        <ul>
          {props.card.techs.map((item) => (
            <li> - {item}</li>
          ))}
        </ul>
      </CardRoot.CardContent>
    </CardRoot.CardWrapper>
  )
}
