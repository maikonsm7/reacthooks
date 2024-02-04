import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";

const Home = () => {
    return(
        <div>
            <h3>Home</h3>
            <HookUseState />
            <HookUseReducer />
        </div>
    )
}

export default Home