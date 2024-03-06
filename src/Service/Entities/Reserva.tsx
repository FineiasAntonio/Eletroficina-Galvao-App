import { NovoProduto } from "./Produto"

export interface Reserva{
    produtosReservados: produtosReservados[]
    novoProdutoReservado: NovoProduto[]
    maoDeObra: number
}

export interface produtosReservados{
    uuidProduto: string | undefined
    quantidade: number | undefined
}