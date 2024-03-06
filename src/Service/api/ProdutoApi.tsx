import { Produto } from "../Entities/Produto";
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