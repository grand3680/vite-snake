import { tailsT } from "types";
import {Game} from "./game"

export function checkDead(this : Game) : boolean {
    const tail : tailsT = this.Player.tails;

    for (let i = 1; i <= tail.length - 1; i++) {
        if (tail[0][0] == tail[i][0] && tail[0][0] == tail[i][1]) return true;
    }

    return false;
}
