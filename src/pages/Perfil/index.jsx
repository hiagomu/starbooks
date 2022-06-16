import React from 'react'
import InteressesPromocoes from '../../components/Perfil/Interesses/index'
import FotoDescricao from '../../components/Perfil/FotoDescricao/index'
import ConquistaSocial from '../../components/Perfil/Conquistas/index'
import '../Perfil/styles.css'

export default function Perfil() {
    return(
        <main>
            <FotoDescricao />
            <InteressesPromocoes />
            <ConquistaSocial />
            <div className='container-button-edit'>
                <button className='edit-button'>Editar</button>    
            </div>
        </main>
    )
}