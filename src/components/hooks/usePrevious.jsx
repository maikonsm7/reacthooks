import { useEffect, useRef } from "react";

// exportacao de uma funcao
export const usePrevious = (value) => {
    const ref = useRef()

    useEffect(()=>{
        ref.current = value
    })

    return ref.current
}