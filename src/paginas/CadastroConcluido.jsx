import React from 'react';
import img from '../assets/concluido.png'
import '../styles/components/CadastroConcluido.css'

function CadastroConcluido() {
    return(
        <main className="container-concluido">
            <h2>Cadastrado com sucesso!</h2>
            <img src={img} alt="Cadastro concluído"/>
        </main>
    );
}

export default CadastroConcluido;