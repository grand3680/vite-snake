import {Game} from "./game"

export function makeCherry(this : Game) : void {
    if (this.ctx == undefined) return;        
    while (true) {
        let random_x : number = Math.floor(Math.random() * this.gridSize);
        let random_y : number = Math.floor(Math.random() * this.gridSize);
        let isValidPosition: boolean = true;

        for (let i = 0; i < this.Player.tails.length; i++) {
            if (this.Player.tails[i][0] == random_x && this.Player.tails[i][1] == random_y){
                isValidPosition = false;
                break
            };
        }

        for (let j = 0; j < this.Player.cherry.length; j++) {
            if (this.Player.cherry[j][0] == random_x && this.Player.cherry[j][1] == random_y) {
                isValidPosition = false;
                break
            };
        }
        if (!isValidPosition) continue;

        this.Player.cherry = [...this.Player.cherry, [random_x, random_y]];
        break
    }
}