import React, { useState } from 'react';
import '../Contato/styles.css'

export default function Contato() {


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMsg] = useState("");

    const handlerNome = (event) => {
        setNome(event.target.value);
    }

    const handlerEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlerMsg = (event) => {
        setMsg(event.target.value);
    }

    const handlerForm = () => {
        console.log({nome, email, mensagem})
    }

    return(
        <main className="container-contato">
            <h2>Contato</h2>

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    handlerForm();
                }}
            >
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome..."
                    value={nome}
                    onChange={handlerNome}
                />
                
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email..."
                    value={email}
                    onChange={handlerEmail}
                />
                
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                    name="mensagem"
                    id="mensagem"
                    rows="10"
                    placeholder="Digite sua mensagem..."
                    value={mensagem}
                    onChange={handlerMsg}
                />

                <button type="submit">Enviar</button>
            </form>

        </main>
    );
}