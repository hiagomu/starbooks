import React, { useState } from 'react';
import { useHistory } from 'react-router';
import firebase from '../data/Firebase'
import '../styles/components/Cadastro.css'

function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    let history = useHistory();

    function cadastro() {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(() => {
                history.push('/sucesso')
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
                autocomplete="none"
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