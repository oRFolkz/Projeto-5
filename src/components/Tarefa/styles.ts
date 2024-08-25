import styled, { css } from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
  width: 450px;

  label {
    display: flex;
    align-itens: center;
    margin-bottom: 16px;
    margin-left: 8px;
  }

  p {
    font-weight: bold;
    color: black;
    font-size: 18px;
    padding: 8px 0 0 8px;
    width: 100px;
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;

  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  img {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const DescricaoCard = styled.div`
  display: flex;
`

interface DescricaoEmailProps {
  hasBorder: boolean
}

const borderClass = css`
  border: 2px solid black;
  color: black;
  border-radius: 0.5rem;
`

export const DescricaoEmail = styled.textarea<DescricaoEmailProps>`
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  height: 25px;
  margin: 8px 0;
  padding: 0px 8px;
  resize: none;
  border: none;
  background-color: transparent;
  overflow-y: hidden;

  ${({ hasBorder }) => hasBorder && borderClass};
`

interface DescricaoTelefoneProps {
  hasBorder: boolean
}

export const DescricaoTelefone = styled.textarea<DescricaoTelefoneProps>`
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  height: 25px;
  margin: 8px 0;
  padding: 0px 8px;
  resize: none;
  border: none;
  background-color: transparent;
  overflow-y: hidden;

  ${({ hasBorder }) => hasBorder && borderClass};
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  border: 2px solid black;

  &:hover {
    opacity: 0.8;
  }
`
