import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function Welcome() {
    const { name = 'world' } = useParams()
    const navigate = useNavigate()


    function handleLoginButtonclick() {
        navigate('/login')
    }

    return (
        <div>
            <button onClick={handleLoginButtonclick}> enter the app</button>
            <h2>ciao {name}</h2>
            <h2>ciao ricordati che se vuoi mettere più cose devi metterle in un div</h2>
            <h1>e che devi fare <i>"NPM RUN DEV"</i></h1>
        </div>
    );
}
