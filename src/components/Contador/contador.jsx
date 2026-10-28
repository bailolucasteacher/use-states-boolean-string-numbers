import { useState } from "react"
import './contador.css'

export default function Contador () {

    const[votos, setVotos] = useState(0)

    const[ativo, setAtivo] = useState(true)

    function aumetarContador() {
        setVotos((e) => e + 1 )
    }

    function dimnuirContador() {
        setVotos((valorAtual) => valorAtual - 1 )
    }

    return(
        <>
            <button
                className="mostrar"
                onClick={() => setAtivo(!ativo)}
            >
                {ativo ? 'Ocultar Contador' :'Mostrar Contador'}
            </button>
            { ativo
                &&
                <div className="contador">
                    <h1 className="votos">{votos}</h1>
                    <button
                        onClick={aumetarContador}
                    >
                        Votar
                    </button>
                    <button
                        onClick={dimnuirContador}
                        className="diminuir"
                    >
                        Diminuir
                    </button>
                </div>
            }
        </>
    )
}