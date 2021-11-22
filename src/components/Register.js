import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeNombre = (e) => {
        const nombre = e.target.value;
        setNombre(nombre);
    };
    const onChangeApellidos = (e) => {
        const apellidos = e.target.value;
        setApellidos(apellidos);
    };
    const onChangeTipoUsuario = (e) => {
        const tipoUsuario = e.target.value;
        setTipoUsuario(tipoUsuario);
    };
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(nombre, apellidos, username, password, tipoUsuario).then(
                (response) => {
                    setMessage(response.usuario);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.usuario) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeNombre}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="apellidos"
                                    value={apellidos}
                                    onChange={onChangeApellidos}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipoUsuario">Tipo de Usuario</label>
                                <Select name='tipoUsuario' 
                                    className="form-control"
                                    value={tipoUsuario}
                                    onChange={onChangeTipoUsuario}
                                    validations={[required]}>
                                    <option value='indirecto'>Indirecto</option>
                                    <option value='directo'>Directo</option>
                                    <option value='externo'>Externo</option>
                                </Select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required, vusername]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div
                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                Bienvenido {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default Register;