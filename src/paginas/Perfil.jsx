import React from 'react';

function Perfil() {
    return(
        <main>
            <div className="container-nome-foto">
                <img src="" alt="Foto de Perfil"/>
                <div>
                    <h1>Hiago Murilo</h1>
                    <div className="container-interesses">
                        <p>Alguma função para exibir os interesses</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero iusto temporibus iure illum ut earum provident molestias.</p>
                </div>
            </div>
            <div className="container-promocoes">
                <div className="promocoes-header">
                    <h2>Minhas Promoções</h2>
                </div>
                <div className="minhas-promocoes">
                    <p>Alguma função para exibir as promoções</p>
                </div>
            </div>
            <div className="container-sorteios">
                <div className="sorteios-header">
                    <h2>Sorteios</h2>
                </div>
                <div className="meus-sorteios">
                    <p>Alguma função para exibir os sorteios</p>
                </div>
            </div>
            <button>Editar</button>
        </main>
    )
}

export default Perfil;