export class CadastroUsuario {
  constructor(
    public nome?: string,
    public sobrenome?: string,
    public genero?: string,
    public dataNascimento?: Date,
    public celular?: number,
    public email?: string,
    public senha?: string,
    public notificacoes?: boolean
  ) {}
}
