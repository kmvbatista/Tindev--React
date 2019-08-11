import React,  { useState } from  'react';

import './Login.css'

import logo from '../assets/logo.svg'

export default function Login({history}) {
    const [username, setUsername]= useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username);
        history.push('/main');
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} >
                <img className="logo" src={logo} alt="Tindev" ></img>
                <input
                    placeholder="digite seu usuário do Github"
                    value={username}
                    onChange= {evento => {
                        setUsername(evento.target.value);
                    }}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}