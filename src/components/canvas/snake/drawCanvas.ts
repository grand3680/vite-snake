import {Game} from "./game"

export function drawCanvas(this : Game) {
    if (this.ctx == undefined) return;        
    let cellSizeX = this.cellSizeX;
    let cellSizeY = this.cellSizeY;

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    for (let i = 0; i < this.Player.tails.length; i++) {
        this.ctx.beginPath();
        
        if (i % 2 == 0) this.ctx.fillStyle = "lime";
        else this.ctx.fillStyle = "green";

        this.ctx.fillRect(this.Player.tails[i][0] * cellSizeX, this.Player.tails[i][1] * cellSizeY, cellSizeX, cellSizeY);  


        this.ctx.closePath();

    }
}