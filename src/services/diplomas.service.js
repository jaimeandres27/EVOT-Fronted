import { axiosConfig } from "../helpers/axios.config";

export const getAll = async() => {
    const response = await axiosConfig.get(`diplomas`);
    return response;
}

export const getByDocument = async(document) => {
    /* const data = { "cedula": document } */
    const response = await axiosConfig.get(`diplomas/by/graduate`,{
        cedula: document
    });
    return response;
}