import React, { useState } from 'react';
import firebase from '../data/Firebase'
import '../styles/components/Cadastro.css'

function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function cadastro() {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                console.log(user)
            })
    }
    
    function handlerWithSenha(event) {
        setSenha(event.target.value);
    }

    function handlerWithEmail(event) {
        setEmail(event.target.value);
    }

    return(
        <main className="container-login">

            <h2>Cadastro</h2>

            <label htmlFor="email">Email</label>
            <input
                onChange={handlerWithEmail}
                value={email}
                type="email"
                name="email"
                placeholder="Digite seu email..."
            />

            <label htmlFor="senha">Senha</label>
            <input
                onChange={handlerWithSenha}
                value={senha}
                type="password"
                name="senha"
                placeholder="Digite sua senha..."
            />

            <button onClick={cadastro}>Cadastrar</button>
        </main>
    );
}

export default Cadastro;