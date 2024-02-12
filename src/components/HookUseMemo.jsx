import { useState, useEffect, useMemo } from "react"

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)
    // const premiumNumbers = ['0', '100', '200'] // gera um warning, memory leek
    const premiumNumbers = useMemo(() => {
        return ['0', '100', '200']
    }, [])

    useEffect(()=>{
        console.log('Premium numbers foi alterado!')
    }, [premiumNumbers])
    return(
        <div>
            <h3>useMemo</h3>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>acertou!</p> : ''}
            <hr />
        </div>
    )
}
export default HookUseMemo