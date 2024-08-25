import * as enums from '../../utils/enums/tarefa'

export type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}
