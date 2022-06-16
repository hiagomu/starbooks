import React from 'react'
import image from '../../../assets/pp.jpg'
import '../FotoDescricao/styles.css'

export default function FotoDescricao() {

    return (
        <div className="container-foto-desc">
                <img src={image} alt="Foto de Perfil"/>
                <div className="container-nome-descricao">
                    <h2>Hiago Murilo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero iusto temporibus iure illum ut earum provident molestias.</p>
                </div>
        </div>
    );
}