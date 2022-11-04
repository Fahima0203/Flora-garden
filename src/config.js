import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://flora-garden-24.herokuapp.com/api"
})