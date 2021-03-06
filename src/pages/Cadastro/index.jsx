import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../providers/auth';
import firebaseMethods from '../../data/Firebase'
import '../Cadastro/styles.css'

export default function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacao, setConfirmacao] = useState("");
    const [nome, setNome] = useState("");
    const [erro, setErro] = useState("");
    const [validacoes, setValidacoes] = useState(false);
    const firebase = firebaseMethods.firebase;
    const db = firebaseMethods.db;
    const navigate = useNavigate();

    const { user, setUser } = React.useContext(AuthContext);
    //const currentUser = firebase.auth().currentUser;

    /*useEffect(() => {
        if(user) {
            navigate("/");
        }
    })*/

    //console.log(currentUser.refreshToken)
    setUser("Raul");
    console.log(user);
    
    async function cadastro() {
        if(validacoes) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, senha)
                /*await db.collection("newusers").add({
                    nome: nome,
                    email: email
                });
                */
                setUser("Raul");
                console.log(user)
                //console.log(currentUser.refreshToken)
                setErro("");
                navigate('/sucesso');
            } catch(err) {
                console.log("erro");
                setErro("Erro: Email já cadastrado");
            }
        }
    }

    function validarCampo(event) {
        if(event.target.value !== senha) {
            setErro("Erro: Senhas diferentes");
            setValidacoes(false);
            return;
        }

        if(event.target.value.length < 6) {
            setErro("Erro: Senha deve ter conter pelo menos 6 caractéres");
            setValidacoes(false)
            return;
        }

        setErro("");
        setValidacoes(true);
        return;
    }
    
    function handlerWithSenha(event) {
        setSenha(event.target.value);
    }

    function handlerWithConfirmacao(event) {
        setConfirmacao(event.target.value);
    }

    function handlerWithEmail(event) {
        setEmail(event.target.value);
    }

    function handlerWithNome(event) {
        setNome(event.target.value);
    }

    return(
        <main className="container-cadastro">

            <h2>Cadastro</h2>

            <label htmlFor="nome">Nome</label>
            <input
                onChange={handlerWithNome}
                value={nome}
                type="text"
                name="nome"
                autoComplete="off"
                placeholder="Digite seu nome..."
            />

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

            <label htmlFor="confirmacao">Confirmar senha</label>
            <input
                onChange={handlerWithConfirmacao}
                value={confirmacao}
                type="password"
                name="confirmacao"
                placeholder="Digite novamente sua senha..."
                onBlur={validarCampo}
            />

            <button onClick={cadastro}>Cadastrar</button>

            <span className="texto-erro">{erro}</span>
        </main>
    );
}