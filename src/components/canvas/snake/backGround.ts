import {Game} from "./game"

export function backGroundCanvas(this : Game) : void {
    if (this.ctxBack == undefined) return;        

    this.ctxBack.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    for (var i = 0; i < this.gridSize; i++){
        for (var j = 0; j < this.gridSize; j++){  
            this.ctxBack.beginPath();
    
            if (i % 2 == j % 2) this.ctxBack.fillStyle = "#3B4044"; 
            else this.ctxBack.fillStyle = "#252A30";
    
            this.ctxBack.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
            this.ctxBack.closePath();      
        }
    }  
}