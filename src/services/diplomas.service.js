import { axiosConfig } from "../helpers/axios.config";

export const getAll = async() => {
    const response = await axiosConfig.get(`diplomas`);
    return response;
}

export const getByDocument = async(data) => {
    /* const data = { "cedula": document } */
    const response = await axiosConfig.get(`diplomas/by/graduate`, data);
    return response;
}