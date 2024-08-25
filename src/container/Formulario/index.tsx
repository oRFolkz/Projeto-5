import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Titulo,
  MainContainer,
  Campo,
  BotaoSalvar,
  Botao
} from '../../styles/index'
import { Card, Form, DisplayFlex } from './styles'
import * as enums from '../../utils/enums/tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import userIcon from '../../imgs/user-circle-svgrepo-com.svg'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricaoEmail, setDescricaoEmail] = useState('')
  const [descricaoTelefone, setDescricaoTelefone] = useState('')
  const [prioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefas = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricaoEmail,
        descricaoTelefone,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Card>
        <Titulo>
          <DisplayFlex>
            <img src={userIcon} alt="user Icon" />
            Novo Contato
          </DisplayFlex>
        </Titulo>
        <Form onSubmit={cadastrarTarefas}>
          <Campo
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            type="text"
            name="Titulo"
            placeholder="Nome completo"
          />
          <Campo
            value={descricaoEmail}
            onChange={({ target }) => setDescricaoEmail(target.value)}
            as="textarea"
            placeholder="Email"
          />
          <Campo
            value={descricaoTelefone}
            onChange={({ target }) => setDescricaoTelefone(target.value)}
            as="textarea"
            placeholder="Telefone"
          />
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
          <Botao onClick={() => navigate('/')}>Cancelar</Botao>
        </Form>
      </Card>
    </MainContainer>
  )
}

export default Formulario
