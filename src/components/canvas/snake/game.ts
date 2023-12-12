import { 
    mapGrid,
    drawCanvas,
    moveSnake,
    handleKeyDown,
    handleMobileMovement,
    handleTouchMove,
    checkPosibleMove
} from "./index"

import { playerT } from 'types.ts'


export class Game {
    protected mapGrid = mapGrid;
    protected drawCanvas = drawCanvas;
    protected moveSnake = moveSnake;
    protected checkPosibleMove = checkPosibleMove;

    protected canvas : HTMLCanvasElement;
    public ctx : CanvasRenderingContext2D | undefined;
    public gridSize : number;
    public cellSizeX : number;
    public cellSizeY : number;

    public canvasWidth : number;
    public canvasHeight : number;

    public cells : any[];
    public Player : playerT = {
        tails : [[0, 0]],
        cherry : [],
        directions : ""
    }

    constructor(refCanvas : HTMLCanvasElement, gridSize : number = 10) {
        this.canvas = refCanvas;
        this.gridSize = gridSize;

        this.canvasHeight = 600;
        this.canvasWidth = 600;
        this.cellSizeX = this.canvasWidth / gridSize;
        this.cellSizeY = this.canvasHeight / gridSize;

        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;

        this.cells = this.mapGrid();
        console.log(this.cells);
        
        if (this.canvas !== null) {
            let n = this.gridSize;
            let x : number = Math.floor(n / 2);
            let y : number = Math.floor(n / 2);

            this.Player.tails = [[x, y], [x, y + 1], [x - 1, y]];

            this.cells[x][y] = "xdds";
            console.log(this.cells);

            this.ctx = this.canvas.getContext('2d')!;      

            // pc events
            window.addEventListener('keydown', (e : {keyCode : number}) => {
                this.Player.directions = this.checkPosibleMove(handleKeyDown(e.keyCode))
            })

            // mobile events
            var xDown: number, yDown : number;
            window.addEventListener('touchstart', (e: TouchEvent) => {
                [xDown, yDown] = handleMobileMovement(e);
            });
            window.addEventListener("touchmove", (e) => {
                this.Player.directions = this.checkPosibleMove(handleTouchMove(e, xDown, yDown));
            }, false);

            this.update();
        }
    }

    public update() {
        this.moveSnake();
        this.drawCanvas();
        setTimeout(() => this.update(), 125);
    }
}