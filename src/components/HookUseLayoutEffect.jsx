import { useState, useEffect, useLayoutEffect } from "react"
const HookUseLayoutEffect = () => {
    // a diferenca dele para o useEffect e que eu posso decidir o que rendenrizar primeiro. ele e sincrono.
    // exemplo: carregar primeiro o modal e depois a pagina, para que carregue tudo junto
    const [name, setName] = useState('Ana')
    
    useEffect(()=>{
        console.log('2')
        setName('Matheus')
    }, [])
    useLayoutEffect(()=>{
        console.log('1')
        setName('Lucas')
    },[])
    return(
        <div>
            <h3>useLayoutEffect</h3>
            <p>Nome: {name}</p>
            <hr />
        </div>
    )
}
export default HookUseLayoutEffect