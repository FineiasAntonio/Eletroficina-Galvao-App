import { Funcionario } from "../Entities/Funcionario";
import { Produto } from "../Entities/Produto";
import { API } from "./api";

export async function getAllFuncionario(): Promise<Funcionario[]> {
    const response = await API.get("/funcionarios")

    if (response.status !== 200) {
        throw {
            status: response.status,
            errorData: response.data
        };
    }

    return response.data as Funcionario[]
}