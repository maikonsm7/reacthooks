import React from "react";
import { useReducer } from "react";
// useReducer tambem faz o mesmo papel do useState, porem vc consegue criar uma funcao para gerenciar as variaveis
const HookUseReducer = () => {
    const [num, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })
    return(
        <div>
            <h3>useReducer</h3>
            <p>Numero aleatorio: {num}</p>
            <button onClick={dispatch}>Gerar numero</button>
            <hr />
        </div>
    )
}

export default HookUseReducer