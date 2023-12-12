import {Game} from "./game"

export function moveSnake(this : Game) {
    if (this.ctx == undefined) return;   
    if (this.Player.directions === undefined) return;

    let tails = this.Player.tails;
    let gridSize = this.gridSize;

    if (tails.length >= 2) { 
        for (let k = tails.length - 1; k >= 1; k--) {
            tails[k][0] = tails[k - 1][0];  
            tails[k][1] = tails[k - 1][1];   
        }            
    }

    var vX : number = this.Player.directions == "left" ? -1 : this.Player.directions == "right" ? 1 : 0;
    var vY : number = this.Player.directions == "up"   ? -1 : this.Player.directions == "down"  ? 1 : 0;
    // head movement ( head number 0)
    tails[0][0] = tails[0][0] + vX; // x Cordinata
    tails[0][1] = tails[0][1] + vY; // y Cordinata

    if (tails[0][0] >= gridSize) tails[0][0] = 0;
    if (tails[0][0] < 0) tails[0][0] = gridSize - 1;

    if (tails[0][1] >= gridSize) tails[0][1] = 0;
    if (tails[0][1] < 0) tails[0][1] = gridSize - 1;


    this.Player.tails = tails
    // checkDead();
}
