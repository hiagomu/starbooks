import React, { useEffect } from 'react'
import '../styles/components/cabecalho.css'
import logo from '../assets/starbooks.png'
import { Link } from 'react-router-dom';

function Cabecalho() {
    
    return(
        <header>
            <nav>
                <div className="nav-sections">
                    <div className="container-nav">
                        <img src={logo} alt="StarBooks Logo" className="img-logo-nav"/>
                        <span>StarBooks</span>
                    </div>
                    <ul>
                        <li><Link className="menu-item" to="/">Promoções</Link></li>
                        <li><Link className="menu-item" to="/contato">Contato</Link></li>
                    </ul>
                </div>
                <div>
                    <Link className="menu-item login" to="/cadastro">Cadastro</Link>
                    <Link className="menu-item login" to="/login">Login</Link>
                </div>
            </nav>
            <h1>
                <img src={logo} alt="StarBooks Logo" className="img-logo"/>
                    StarBooks
            </h1>
        </header>
    );
}

export default Cabecalho;