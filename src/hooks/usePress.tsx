import { useEffect, useState } from 'react';

export const usePress = (keyTarget : string) : boolean => {
    const [keyIsPressed, setKeyIsPressed] = useState(false);

    const downHandler = ({ key } : {key : string}) => {
        if(key.toLowerCase() == keyTarget) return setKeyIsPressed(true);
    }

    const upHandler = ({ key } : {key : string}) => {
        if(key.toLowerCase() == keyTarget) return setKeyIsPressed(false);
    }

    useEffect(() => {
        window.addEventListener("keydown", downHandler)
        window.addEventListener("keyup", upHandler)

        return () => {
            window.removeEventListener("keydown", downHandler)
            window.removeEventListener("keyup", upHandler)
        }
    }, []) 

    return keyIsPressed;
}
