import {Game} from "./game"

export function mapGrid(this : Game) {
    var arr = new Array(this.gridSize); 
    for (var i = 0; i < this.gridSize; i++) {
        arr[i] = new Array(this.gridSize);     
    }

    return arr;
}