import { useRef } from "react"
import SomeComponent from "./SomeComponent"

const HookUseImperativeHandle = () => {
    // nesse exemplo estou executando uma uma funcao no componente filho ao clicar no botao pai
    const inputRef = useRef()
    return(
        <div>
            <h3>useImperativeHandle</h3>
            <SomeComponent ref={inputRef}/>
            <button onClick={() => inputRef.current.validate()}>Validate</button>
            <hr />
        </div>
    )
}
export default HookUseImperativeHandle