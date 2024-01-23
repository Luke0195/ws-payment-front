import { FiSearch } from 'react-icons/fi'

export function Card() {
  return (
    <div>
      <div>
        <FiSearch size={20} color="1a1a1d" />
        <span> Sobre o projeto Backend.</span>
      </div>
      <div>
        <span>
          {' '}
          O projeto tem uma visão de aplicar os conhecimentos aprendidos sobre
          como criar um sistema em camadas utilizando o framework springboot.
        </span>
        <span> Tecnológias usadas no desenvolviment backend:</span>
        <ul>
          <li> - Springboot </li>
          <li> - Spring IOC </li>
          <li> - SpringWeb </li>
          <li> - SpringData Jpa </li>
          <li> - Postgres </li>
          <li> - Lombok </li>
          <li> - Validation </li>
          <li> - Docker </li>
          <li> - Docker-Compose </li>
          <li> - GitHub-Actions </li>
          <li> - Hibernate</li>
          <li> - Diagramas de Caso de Uso </li>
          <li> - Diagrama de Classe </li>
          <li> - Documentação com readme.md </li>
          <li> - Api Rest </li>
          <li> JSON </li>
        </ul>
      </div>
    </div>
  )
}
