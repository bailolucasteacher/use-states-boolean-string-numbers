import './Card.css'
import fotoPerfil from '../../assets/bolsolula.jpg'
import { useState } from 'react'

export default function Card() {
    const[nome, setNome] = useState('')

    return(
        <div className="card">
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <img className='imagem' src={fotoPerfil} alt="" />
            <h1>{nome}</h1>
            <p className='cidade'>São José do Rio Preto - Sp</p>
            <span>Estudante de Sistema da Informação</span>
        </div>
    )
}
