import { directionT } from 'types.ts';

export function handleKeyDown(keyCode : number) : directionT {
    console.log(keyCode);
    switch (keyCode) {
        case 37:
        case 65:
            return "left"
        case 38:
        case 87:
            return "up"
        case 39:
        case 68:
            return "right"
        case 40:
        case 83:
            return "down"
        default:
    }
    return "";
}
