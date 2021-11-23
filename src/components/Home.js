import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import { Accordion } from "react-bootstrap";
const Home = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response[0].nombre);
                console.log(response);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                {/* <h3>{content}</h3> */}
                <h1>Bienvenido, ¿Qué deseas consultar?</h1>
            </header>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Consultar Enfermedades</Accordion.Header>
                    <Accordion.Body>
                        En esta sección podrás conocer información detallada sobre alguna enfermedad en específico o de todas las enfermedades relacionadas a la salud mental
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Consultar Artículos científicos sobre temas de la salud</Accordion.Header>
                    <Accordion.Body>
                        Aquí podrás leer las más recientes publicaciones científicas, extraídas de las revistas científicas más prestigiosas a nivel internacional.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Consultar Recursos multimedia sobre temas de la salud</Accordion.Header>
                    <Accordion.Body>
                        Infórmate de una manera más interactiva, rápida y eficaz con nuestros distintos videos, playlist, documentos, libros o técnicas relacionadas con el tratamiento mental.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Consultar foros</Accordion.Header>
                    <Accordion.Body>
                        Consulta y aporta a la comunidad sobre algún tema o duda relacionada a la salud mental.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Home;