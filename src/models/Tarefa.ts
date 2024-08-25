import * as enums from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricaoEmail: string
  descricaoTelefone: string
  id: number

  constructor(
    titulo: string,
    propridade: enums.Prioridade,
    status: enums.Status,
    descricaoEmail: string,
    descricaoTelefone: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = propridade
    this.status = status
    this.descricaoEmail = descricaoEmail
    this.descricaoTelefone = descricaoTelefone
    this.id = id
  }
}

export default Tarefa
