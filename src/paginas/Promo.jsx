import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';
import '../styles/components/Promo.css'

function Promo() {

    const [promo, setPromo] = useState({});
    const {id} = useParams();

    useEffect(() => {
        busca(`/promocoes/${id}`, setPromo)
    }, [id])

    return(
        <main className="container-promo">
            <div className="column-1">
                <img
                    src={promo.frente}
                    alt={`Foto do Livro: ${promo.titulo}`}
                />
                <ul>
                    <li className="autor">Autor: {promo.autor}</li>
                    <li className="editora">Editora: {promo.editora}</li>
                    <li className="idioma">Idioma: {promo.idioma}</li>
                    <li className="paginas">Páginas: {promo.paginas}</li>
                    <li className="dimensoes">Dimensões: {promo.dimensoes}</li>
                    <li className='raking'>Ranking: #{promo.ranking}</li>
                </ul>
            </div>
            <div className="column-2">
                <div className="container-text">
                    <h2 className='title'>{promo.titulo}</h2>
                    <h3 className="autor">{promo.autor}</h3>
                    <p className="descricao">{promo.descricao}</p>
                </div>
                <div className="container-buttons">
                    <a href={promo.link} className="promo-button">Oferta</a>
                    <Link to="/" className="promo-button">Voltar</Link>
                </div>
            </div>
            <div className="column-3">
                <div>
                    <span className="rating">⭐{promo.stars}</span>
                    <span className="estrela"></span>
                </div>
                <span className="preco">💰{promo.preco}</span>
            </div>
            
        </main>
    );
}

export default Promo;