
import './Card.css'
import fotoPerfil from '../../assets/bolsolula.jpg'
import { useState } from 'react'

export default function Card() {
    const [nome, setNome] = useState('Lucas')
    const [cidade] = useState('São José do Rio Preto - SP')
    const [profissao] = useState('Estudante de Sistemas de Informação')

    return (
        <div className="card">
            <img
                className="imagem"
                src={fotoPerfil}
                alt={`Foto de perfil de ${nome}`}
            />

            <h1>{nome || 'Sem nome'}</h1>

            <p className="cidade">{cidade}</p>

            <span>{profissao}</span>

            <button onClick={() => setNome('Desenvolvedor')}>
                Alterar nome
            </button>
        </div>
    )
}
