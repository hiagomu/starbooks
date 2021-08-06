import React, { useEffect, useState } from 'react';
import firebaseMethods from '../data/Firebase'
import '../styles/components/Login.css'
import  image  from '../assets/books-back.svg'
import { useHistory } from 'react-router';

function Login() {

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");
    const firebase = firebaseMethods.firebase;
    const user = firebase.auth().currentUser;
    let history = useHistory();

    /*useEffect(() => {
        if(user) {
            history.push("/");
        }
    })*/


    function handlerWithEmail(event) {
        setEmail(event.target.value)
    }

    function handlerWithSenha(event) {
        setSenha(event.target.value)
    }

    async function login() {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, senha);
            history.push("/");
        } catch(error) {
            setErro("Erro: Email ou senha incorreto")
        }
    }

    return(
        <main className="container-login">
            
            <div div className="poster-login">
                <img src={image} alt=""/>
                <p>Quer receber as melhores <span>promoções</span> antes que todo mundo?</p>
            </div>

            <div className="form-login">
                <h2>Login</h2>

                <label htmlFor="email">Email</label>
                <input
                    onChange={handlerWithEmail}
                    value={email}
                    type="email"
                    name="email"
                    autoComplete="off"
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

                <button onClick={login}>Entrar</button>

                <span className="texto-erro">{erro}</span>
            </div>
        </main>
    );
}

export default Login;