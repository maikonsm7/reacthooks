import { useEffect, useState, useRef } from "react"
const HookUseRef = () => {
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    // e melhor usar o useRef dentro do useEffect, pois se usar o useState fica um loop infinito
    useEffect(()=>{
        numberRef.current =  numberRef.current + 1
    })
    return(
        <div>
            <h3>useRef</h3>
            <p>O componente renderizou: {numberRef.current} vezes</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>contador A</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>contador B</button>
        </div>
    )
}

export default HookUseRef