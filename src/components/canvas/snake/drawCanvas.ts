import {Game} from "./game"

export function drawCanvas(this : Game) {
    if (this.ctx == undefined) return;        
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 50, 50);
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(10, 10, 50, 50);
    this.ctx.closePath();
}