import React, { useEffect, useState } from 'react';
import '../Home/styles.css'
import { Link, useNavigate } from 'react-router-dom';
import { busca } from '../../api/api';
import searchBook  from '../../api/paapi';
export default function Home() {

    const [promos, setPromos] = useState([])
    const [textoBusca, setTextoBusca] = useState("")
    const navigate = useNavigate()

    const handleWithTextoBusca = (event) => {
        setTextoBusca(event.target.value)
        navigate("/busca")
    }

    const goToBusca = (event) => {
        event.preventDefault()
    } 

    useEffect(() => {
        busca("/promocoes", setPromos)

    }, [])

    return(
        <>
            <form
                action="submit"
                onSubmit={goToBusca}
            >
                <input
                    className='input-busca'
                    type="text"
                    placeholder='Procure pelo título ou autor...'
                    value={textoBusca}
                    onChange={handleWithTextoBusca}
                />
            </form>

            <div className="container-promocoes">
                {promos.map((promo) => (
                    <Link
                        to={`/promocoes/${promo.id}`}
                        key={promo.id}
                        className='promo-item'
                    >
                        <article>
                            <div className='image-info'>
                                <img src={promo.frente} alt={"Livro: " + promo.titulo}/>
                                <span className='underline-style'/>
                            </div>
                            <div className='content-info'>
                                <h2 className='titulo'>{promo.titulo}</h2>
                                <h3 className='autor'>{promo.autor}</h3>
                                <p className='descricao'>{(promo.descricao).substring(0, 100)}...</p>
                                <div className='container-buttons'>
                                    <a className='content-info_button' href={promo.link}>Oferta</a>
                                    <Link className='content-info_button' to="/sobre">Sobre</Link>
                                </div>
                            </div>
                            <div className='rating'>
                                <h2>{promo.stars}</h2>
                                <span className='star'>⭐</span>
                            </div>
                        </article>
                    </Link>
                ))}
                
            </div>
        </>

    );
}