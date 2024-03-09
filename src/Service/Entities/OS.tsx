import { Funcionario } from "./Funcionario";
import { Reserva } from "./Reserva";

export interface OrdemServico {
    id: number;
    nome: string;
    telefone: string;
    endereco: string;
    cpf: string;
    dataEntrada: Date;
    dataSaida: Date;
    dataConclusao?: Date;
    dataEntrega?: Date;
    equipamento: string;
    numeroSerie: string;
    observacao: string;
    servico: string;
    situacao: situacao;
    subSituacao?: number;
    imagemEntrada?: string[];
    imagemSaida?: string;
    video?: string;
    funcionario: Funcionario;
    comentarios: string;
    reserva?: reserva;
    valorTotal: number;
}

export interface CreateOrdemServicoDTO {
    nome: string;
    telefone: string;
    endereco: string;
    dataSaida: Date;
    equipamento: string;
    numeroSerie: string;
    observacao: string;
    servico: string;
}

export interface UpdateOrdemServicoDTO {
    nome: string;
    cpf: string;
    telefone: string;
    endereco: string;
    dataSaida: Date;
    equipamento: string;
    numeroSerie: string;
    funcionarioId: number;
    observacao: string;
    comentarios?: string;
    servico: string;
    concluido: boolean;
    subSituacao?: number;
}

enum situacao {
    EM_ANDAMENTO = "EM_ANDAMENTO",
    CONCLUIDO = "CONCLUIDO",
    AGUARDANDO_PECA = "AGUARDANDO_PECA"
}

enum subSituacao {
    APROVADO = "APROVADO",
    MONTADO = "MONTADO",
    TESTADO = "TESTADO",
    AGUARDANDO_RETIRADA = "AGUARDANDO_RETIRADA",
    ENTREGUE = "ENTREGUE"
}

interface reserva {
    id: string;
    idOS: number;
    produtosReservados: produtoReservado[];
    ativo: boolean;
}

interface produtoReservado {
    id: string;
    produto: string;
    referencia: string;
    quantidade: number;
    precoUnitario: number;
    quantidadeNecessaria: number;
}

export interface OSCreateRequest {
    nome: string;
    telefone: string;
    endereco: string;
    cpf: string;
    equipamento: string;
    numeroSerie: string;
    servico: string;
    dataSaida: Date;
    funcionarioId: number;
    observacao: string;
    comentarios: string;
    reserva: Reserva
}