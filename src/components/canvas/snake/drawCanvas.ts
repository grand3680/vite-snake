import {Game} from "./game"

export function drawCanvas(this : Game) {
    if (this.ctx == undefined) return;        
    let cellSize = this.cellSize;

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    this.ctx.beginPath();
    for (let i = 0; i < this.Player.tails.length; i++) {
        if (this.Player.tails[i][0] <= -1 && this.Player.tails[i][1] <= -1) continue;
        
        if (i % 2 == 0) this.ctx.fillStyle = "lime";
        else this.ctx.fillStyle = "green";
        
        this.ctx.fillRect(this.Player.tails[i][0] * cellSize, this.Player.tails[i][1] * cellSize, cellSize, cellSize);  

    }
    this.ctx.closePath();

    if (this.Player.cherry.length >= 1) {
        this.ctx.beginPath();
        for (let j = 0; j < this.Player.cherry.length; j++) {
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(this.Player.cherry[j][0] * cellSize, this.Player.cherry[j][1] * cellSize, cellSize, cellSize);  
        }
        this.ctx.closePath();        
    }


    this.ctx.beginPath();
    this.ctx.fillStyle = "#50AFE4";
    this.ctx.fillRect(this.Player.tails[0][0] * cellSize, this.Player.tails[0][1] * cellSize, cellSize, cellSize);  
    this.ctx.closePath();
}