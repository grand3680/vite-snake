import { directionT as dirT } from 'types.ts';
import {Game} from "./game"

export function checkPosibleMove(this : Game, direction : dirT) : dirT {
    if (this.Player.tails.length < 2) return direction;
    let head : number[] = [this.Player.tails[0][0], this.Player.tails[0][1]]

    switch (direction) {
        case "left":
            if (head[0] - 1 == this.Player.tails[1][0]) return this.Player.directions
            else return "left"
            
        case "right":
            if (head[0] + 1 == this.Player.tails[1][0]) return this.Player.directions
            else return "right"

        case "up":
            if (head[1] - 1 == this.Player.tails[1][1]) return this.Player.directions
            else return "up"


        case "down":
            if (head[1] + 1 == this.Player.tails[1][1]) return this.Player.directions
            else return "down"
        default: 
            return this.Player.directions;
    }
}
