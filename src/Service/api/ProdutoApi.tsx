import { NovoProduto, Produto } from "../Entities/Produto";
import { API } from "./api";

export async function getAllProduto(): Promise<Produto[]> {
    const response = await API.get("/estoque")

    if (response.status !== 200) {
        throw {
            status: response.status,
            errorData: response.data
        };
    }

    return response.data as Produto[]
}

export async function createProduto(produto: NovoProduto) {
    const response = await API.post("/estoque", produto)

    if (response.status !== 201) {
        throw {
            status: response.status,
            errorData: response.data
        };
    }
}