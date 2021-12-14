import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://mern-blogg-page.herokuapp.com/api/"
});