import { axiosConfig } from "../helpers/axios.config";

export const getActivePartners = async() =>{
    const res = await axiosConfig.get(`institutions/actives`)
    return res;
}

export const getInstitutions = async(TOKEN) => {
    const res = await axiosConfig.get(`institutions`,  {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${TOKEN}`,
        }
    });

    return res;
}