import React from 'react'
import '../styles/components/cabecalho.css'
import { Link } from 'react-router-dom';

function Cabecalho() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link className="menu-item" to="/">Promoções</Link></li>                    
                </ul>
            </nav>
            <h1>Star Promoções</h1>
        </header>
    );
}

export default Cabecalho;