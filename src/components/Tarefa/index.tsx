import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Botao, BotaoSalvar } from '../../styles'
import userIcon from '../../imgs/user-circle-svgrepo-com.svg'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  descricaoEmail: descricaoEmailValue,
  descricaoTelefone: descricaoTelefoneValue,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditandoEmail, setEstaEditandoEmail] = useState(false)
  const [estaEditandoTelefone, setEstaEditandoTelefone] = useState(false)
  const [descricaoEmail, setDescricaoEmail] = useState('')
  const [descricaoTelefone, setDescricaoTelefone] = useState('')

  useEffect(() => {
    if (descricaoEmailValue.length > 0) {
      setDescricaoEmail(descricaoEmailValue)
    }
    if (descricaoTelefoneValue.length > 0) {
      setDescricaoTelefone(descricaoTelefoneValue)
    }
  }, [descricaoEmailValue, descricaoTelefoneValue])

  function cancelarEdicao() {
    setEstaEditandoEmail(false)
    setEstaEditandoTelefone(false)
    setDescricaoEmail(descricaoEmailValue)
    setDescricaoTelefone(descricaoTelefoneValue)
  }

  return (
    <S.Card>
      <S.Titulo>
        <div>
          <img src={userIcon} alt="user Icon" />
          {titulo}
        </div>
      </S.Titulo>
      <S.DescricaoCard>
        <p>E-Mail:</p>
        <S.DescricaoEmail
          disabled={!estaEditandoEmail}
          value={descricaoEmail}
          onChange={(e) => setDescricaoEmail(e.target.value)}
          hasBorder={estaEditandoEmail}
        />
      </S.DescricaoCard>
      <S.DescricaoCard>
        <p>Telefone: </p>
        <S.DescricaoTelefone
          disabled={!estaEditandoTelefone}
          value={descricaoTelefone}
          onChange={(e) => setDescricaoTelefone(e.target.value)}
          hasBorder={estaEditandoTelefone}
        />
      </S.DescricaoCard>
      <S.BarraAcoes>
        {estaEditandoEmail || estaEditandoTelefone ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricaoEmail,
                    descricaoTelefone,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditandoEmail(false)
                setEstaEditandoTelefone(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditandoEmail(true)}>
              Editar Email
            </Botao>
            <Botao onClick={() => setEstaEditandoTelefone(true)}>
              Editar Telefone
            </Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover Contato
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
