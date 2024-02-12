import {React, useContext} from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect"
import {SomeContext} from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";

const Home = () => {
    const {contextValue} = useContext(SomeContext)
    return(
        <div>
            <h3>Home</h3>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <HookUseRef />
            <HookUseCallback />
            <HookUseMemo />
            <h3>useContext</h3>
            <p>Valor do contexto: {contextValue}</p>
        </div>
    )
}

export default Home