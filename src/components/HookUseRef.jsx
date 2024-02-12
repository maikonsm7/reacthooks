import { useEffect, useState, useRef } from "react"
const HookUseRef = () => {
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)
    
    // e melhor usar o useRef dentro do useEffect, pois se usar o useState fica um loop infinito
    // serve tambem para manipulacao do DOM, substitui o getElementById
    // dar foco em um imput depois de enviar o relatorio (ou acessar todas as propriedade do elemento)
    useEffect(()=>{
        numberRef.current =  numberRef.current + 1
    })

    // useRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setText('')
        inputRef.current.focus()
    }
    return(
        <div>
            <h3>useRef</h3>
            <p>O componente renderizou: {numberRef.current} vezes</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>contador A</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>contador B</button>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={e => setText(e.target.value)}/>
            <button>enviar</button>
        </form>
        </div>
    )
}

export default HookUseRef