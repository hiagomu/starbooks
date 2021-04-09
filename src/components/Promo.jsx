import React from 'react';

function Promo() {
    return(
        <main>
            <div>
                <img src="" alt=""/>
                <ul>
                    <li className="autor"></li>
                    <li className="editora"></li>
                    <li className="idioma"></li>
                    <li className="paginas"></li>
                    <li className="dimensoes"></li>
                    <li className='raking'></li>
                </ul>
            </div>
            <div>
                <h2 className='title'></h2>
                <h3 className="autor"></h3>
                <p className="descricao"></p>
                <div>
                    <a href="" className="oferta"></a>
                    <a href="" className="voltar"></a>
                </div>
            </div>
            <div>
                <div>
                    <span className="rating"></span>
                    <span className="estrela"></span>
                </div>
                <span className="preco"></span>
            </div>
        </main>
    );
}

export default Promo;