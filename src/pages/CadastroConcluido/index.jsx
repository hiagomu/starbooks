import React from 'react';
import img from '../../assets/concluido.png'
import '../CadastroConcluido/styles.css'

export default function CadastroConcluido() {
    return(
        <main className="container-concluido">
            <h2>Cadastro concluído!</h2>
            <img src={img} alt="Cadastro concluído"/>
        </main>
    );
}