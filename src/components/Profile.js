import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>Perfil</strong> {currentUser.usuario}
                </h3>
            </header>
            <p>
                <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
                {currentUser.token.substr(currentUser.token.length - 20)}
            </p>
            <p>
                <strong>Nombre:</strong> {currentUser.nombre}
            </p>
            <p>
                <strong>Apellidos:</strong> {currentUser.apellidos}
            </p>
            <strong>Tipo de usuario:</strong> {currentUser.tipoUsuario }
        </div>
    );
};

export default Profile;