import {Game} from "./game"

export function checkDead(this : Game) : boolean {
    for (let i = 1; i <= this.Player.tails.length - 1; i++) {
        if (this.Player.tails[0][0] == this.Player.tails[i][0] && this.Player.tails[0][1] == this.Player.tails[i][1]) return this.Player.deadInfo = true;
    }
    return this.Player.deadInfo = false;
}