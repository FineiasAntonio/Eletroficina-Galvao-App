import { API } from "./api";
import { OrdemServico } from "../Entities/OS";

export async function getAllOS(): Promise<OrdemServico[]> {
    const response = await API.get("/ordensdeservicos")

    if (response.status !== 200) {
        throw {
            status: response.status,
            errorData: response.data
        };
    }

    return response.data as OrdemServico[]
}

export async function getOSById(id: number) {
    const response = await API.get(`/ordensdeservicos/${id}`)

    if (response.status !== 200) {
        throw {
            status: response.status,
            errorData: response.data
        };
    }

    return response.data as OrdemServico
}

export async function createOS() {
    throw new Error("Not yet implemented")
}

export async function deleteOS(id: number) {
    const response = await API.delete(`/ordensdeservicos/${id}`)

    // FIXME: The correct status code for delete is 203, but the API doesn't return it yet.
    if (response.status !== 200) {
        throw {
            status: response.status,
            errordata: response.data
        }
    }
}