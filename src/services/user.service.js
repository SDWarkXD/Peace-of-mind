import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://peace-of-mind-backend.herokuapp.com/v1/";

const getPublicContent = () => {
    return axios.get(API_URL + "enfermedades");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};


export default {
    getPublicContent,
    getUserBoard,
};
