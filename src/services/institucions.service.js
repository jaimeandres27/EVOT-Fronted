import { axiosConfig } from "../helpers/axios.config";

export const getActivePartners = async() =>{
    const res = await axiosConfig.get(`institutions/actives`)
    return res;
}