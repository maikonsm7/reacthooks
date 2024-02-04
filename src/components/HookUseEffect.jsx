import React from "react";
import { useEffect, useState } from "react";

// useEffect executa algo apartir de algum evento
// exemplo: se uma variavel mudar, ele executa alguma funcao.
const HookUseEffect = () => {
    const [numero, setNumero] = useState(1)
    const incrementar = () => {
        setNumero(numero+1)
    }
    useEffect(() => {
        console.log('Estou executando...')
    }, [numero])
    
    return(
        <div>
            <h4>useEffect</h4>
            <p>{numero}</p>
            <button onClick={incrementar}>incrementar</button>
            <hr />
        </div>
    )
}

export default HookUseEffect