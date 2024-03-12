import { Produto } from "../Entities/Produto";
import { Reserva, produtosReservados } from "../Entities/Reserva";
import { API } from "./api";

export async function getAllProduto(): Promise<Reserva[]> {
    const response = await API.get("/reservas")

    if (response.status !== 200) {
        throw {
            status: response.status,
            errorData: response.data
        };
    }

    return response.data as Reserva[]
}

export async function reservarProduto(id: number, produto: produtosReservados): Promise<number> {
    const response = await API.post(`/reservas/${id}`, produto)

    if (response.status !== 200) {
        throw {
            status: response.status,
            errorData: response.data
        };
    }

    return response.status
}