import { axiosConfig } from "../helpers/axios.config";

export const login = async(data) => {
    const response = await axiosConfig.post(`auth`, data);
    return response;
} 