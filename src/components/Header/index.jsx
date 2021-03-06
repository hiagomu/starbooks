import React, { useEffect } from 'react'
import '../Header/styles.css'
import logo from '../../assets/starbooks.png'
import { Link } from 'react-router-dom';
import firebaseMethods from '../../data/Firebase'

export default function Header() {

    const firebase = firebaseMethods.app;
    //let user = firebase.auth().currentUser;
    let user = ""

    useEffect(() => {
        console.log("User state changed!")
    }, [user])

    function logout() {
        firebase.auth().signOut();
    }
    
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
                        <li><Link className="menu-item" to="/perfil">Perfil</Link></li>
                    </ul>
                </div>

                { user ? 
                (
                    <div>
                        <Link className="menu-item login" onClick={logout}>Logout</Link>
                    </div>
                ) :
                (
                    <div>
                        <Link className="menu-item login" to="/cadastro">Cadastro</Link>
                        <Link className="menu-item login" to="/login">Login</Link>
                    </div>
                )
                }
                
            </nav>
            <h1>
                <img src={logo} alt="StarBooks Logo" className="img-logo"/>
                    StarBooks
            </h1>
        </header>
    );
}