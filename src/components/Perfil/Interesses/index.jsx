import React from 'react';
import '../Interesses/styles.css'

export default function Interesses() {
    return(
        <div className="container-promocoes-interesses">

                <div className="container-promocoes-perfil">
                    <div className="promocoes-header">
                        <h3>Minhas Promoções</h3>
                    </div>
                    <div className="minhas-promocoes">
                        <p>SHOOOOOOOOOOOOW</p>
                    </div>
                </div>

                <div className="container-interesses-perfil">
                    <div className="interesses-header">
                            <h3>Meus interesses</h3>
                        </div>
                        <div className="meus-interesses">
                            <p>Alguma função para exibir os interesses</p>
                    </div>
                </div>

        </div>
    );
}