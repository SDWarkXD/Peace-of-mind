import axios from "axios";

const API_URL = "https://peace-of-mind-backend.herokuapp.com/v1/";

const register = (nombre, apellidos, username, password, tipoUsuario) => {
    return axios.post(API_URL + "usuarios", {
        "nombre": nombre,
        "apellidos": apellidos,
        "usuario": username,
        "password": password,
        "tipoUsuario": tipoUsuario
    })
    .then((response) => {

        return response.data;
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "/usuarios/entrar", {
            "usuario": username,
            "password": password,
        })
        .then((response) => {
            console.log(response);
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const aut= {
    register,
    login,
    logout,
    getCurrentUser,
}
export default aut;