import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const EstiloGobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family; Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div``

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin: 20px 0 20px 10px;
  font-size: 24px;
  font-weight: bold;
`

export const Campo = styled.input`
  display: flex;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: black;
  border: 2px solid black;
  width: 250px;
  height: 50px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
  border: 2px solid black;

  &:hover {
    opacity: 0.8;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGobal
