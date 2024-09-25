export interface Visita {
  id?: number,
  nome: string;
  cpf: string;
  destino: string;
  nomeRecebedor: string;
  origem: string;
  data?: Date;
  hora?: Date;
}

const ELEMENT_DATA: Visita[] = [
  {id: 1, nome: 'maria antonieta', cpf: '123.456.789-12', destino: 'Casa civil', nomeRecebedor: 'Jose', origem: 'prefeitura de recife', },
  {id: 2, nome: 'don pedro', cpf: '123.456.789-13', destino: 'Casa civil', nomeRecebedor: 'mario', origem: 'prefeitura de olinda', },
  {id: 3, nome: 'guilherme andrade', cpf: '123.456.789-14', destino: 'Casa militar', nomeRecebedor: 'mario', origem: 'prefeitura jaboatao', },
  {id: 4, nome: 'Rafa brandao', cpf: '123.456.789-15', destino: 'Casa civil', nomeRecebedor: 'Jose', origem: 'prefeitura', },
  {id: 5, nome: 'ramo dino', cpf: '123.456.789-16', destino: 'Casa civil', nomeRecebedor: 'Jose', origem: 'prefeitura', },
  {id: 6, nome: 'otacilio', cpf: '123.456.789-17', destino: 'Casa civil', nomeRecebedor: 'Jose', origem: 'prefeitura', },

];
