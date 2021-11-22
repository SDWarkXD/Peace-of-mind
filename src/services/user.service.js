import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://peace-of-mind-backend.herokuapp.com/v1/";

const getPublicContent = () => {
    return fetch(API_URL + "enfermedades").then(
        (data) => data.json()
    )

};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};


const service = {
    getPublicContent,
    getUserBoard,
};

export default service;