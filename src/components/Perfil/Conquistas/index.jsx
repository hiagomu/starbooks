import React from 'react';
import '../Conquistas/styles.css'

export default function Conquistas() {
    
    return(
        <div className="container-conquistas-social">

            <div className="container-conquistas">
                <div className="conquistas-header">
                    <h3>Conquistas</h3>
                </div>
                <div className="minhas-conquistas">
                    <p>Alguma função para exibir as conquistas</p>
                </div>
            </div>

            <div className="container-social">
                <div className="social-header">
                    <h3>Social</h3>
                </div>
                <div className="minhas-redes">
                    <p>Alguma função para exibir as Redes</p>
                </div>
            </div>

        </div>
    );
}