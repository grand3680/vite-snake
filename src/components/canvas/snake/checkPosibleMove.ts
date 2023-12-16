import { tailsT,  directionT as dirT } from 'types';
import {Game} from "./game"


export function checkPosibleMove(this : Game, direction : dirT) : dirT {
    const tail : tailsT = this.Player.tails;
    if (tail.length < 2) return direction;

    if (direction == "left" || direction == "right") {
        if (tail[0][0] + (direction == "left" ? -1 : 1) != tail[1][0]) {
            return direction;
        }
    }

    if (direction == "up" || direction == "down") {
        if (tail[0][1] + (direction == "up" ? -1 : 1) != tail[1][1]) {
            return direction;
        }
    }

    return this.Player.directions;
}
