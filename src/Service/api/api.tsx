import axios from "axios";

export const API = axios.create({
    baseURL: "http://26.12.124.80:8080",
    timeout: 3000,
    timeoutErrorMessage: "Connection timeout",
    validateStatus: () => true
})

export type apiError = {
    errorData: string,
    status: number
}