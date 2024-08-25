import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  width: 120px;
  height: 50px;
  border: 2px solid black;
  border-radius: 2rem;
  background-color: ${variaveis.verde};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  margin: 20px 0 0px 40px;

  &:hover {
    opacity: 0.8;
  }
`
