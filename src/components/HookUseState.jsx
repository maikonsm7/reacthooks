import React from "react";
import { useState } from "react";

// useState gerencia o estado de variaveis
const HookUseState = () => {
    const [name, setName] = useState('Ana')
    return(
        <div>
            <h4>useState</h4>
            <p>Nome: {name}</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <hr />
        </div>
    )
}

export default HookUseState