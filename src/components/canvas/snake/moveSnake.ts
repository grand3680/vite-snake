import {Game} from "./game"

export function moveSnake(this : Game) {
    if (this.ctx == undefined) return;   
    if (this.Player.directions === undefined) return;

    let tails = this.Player.tails;
    let gridSize = this.gridSize;

    
    var vX : number = this.Player.directions == "left" ? -1 : this.Player.directions == "right" ? 1 : 0;
    var vY : number = this.Player.directions == "up"   ? -1 : this.Player.directions == "down"  ? 1 : 0;

    if (!(vX != 0 || vY != 0)) return;
    if (tails.length >= 2) { 
        for (let k = tails.length - 1; k >= 1; k--) {
            tails[k][0] = tails[k - 1][0];  
            tails[k][1] = tails[k - 1][1];   
        }            
    }

    // head movement ( head number 0)
    tails[0][0] = tails[0][0] + vX; // x Cordinata
    tails[0][1] = tails[0][1] + vY; // y Cordinata

    if (tails[0][0] >= gridSize) tails[0][0] = 0;
    if (tails[0][0] < 0) tails[0][0] = gridSize - 1;

    if (tails[0][1] >= gridSize) tails[0][1] = 0;
    if (tails[0][1] < 0) tails[0][1] = gridSize - 1;

    if (this.Player.cherry) { 
        for (let k = this.Player.cherry.length - 1; k >= 0; k--) {
            if (tails[0][0] == this.Player.cherry[k][0] && tails[0][1] == this.Player.cherry[k][1]) {
                tails = [...tails, [-1, -1]]
                this.Player.cherry.splice(k, 1);

                this.makeCherry();
            }

        }            
    }


    this.Player.tails = tails
    this.Player.deadInfo = this.checkDead();
}
