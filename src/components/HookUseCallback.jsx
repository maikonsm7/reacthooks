import { useCallback, useState } from "react"
import List from './List'
const HookUseCallback = () => {
    // o proprio REACT orienta a sempre colocarmos uma funcao dentro do useCallback por conta da perfomance, dessa forma a funcao nao sera reenderizada a cada execucao.
    // nesse exemplo os dados sempre carregam ao usar o incrementador.
    const [counter, setCounter] = useState(0)
    // const getItemsFromDataBase = () => {
    //     return ['a', 'b', 'c']
    // }
    const getItemsFromDataBase = useCallback(()=>{
        return ['a', 'b', 'c']
    }, [])
    return(
        <div>
            <h3>useCallback</h3>
            <button onClick={() => setCounter(counter + 1)}>alterar</button>
            <p>{counter}</p>
            <List getItems={getItemsFromDataBase}/>
            <hr />
        </div>
    )
}
export default HookUseCallback