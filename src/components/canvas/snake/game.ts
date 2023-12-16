import { 
    drawCanvas,
    backGroundCanvas,
    moveSnake,
    handleKeyDown,
    handleMobileMovement,
    handleTouchMove,
    checkPosibleMove,
    makeCherry,
    checkDead
} from "./index"

import { playerT } from 'types.ts'


export class Game {
    protected drawCanvas = drawCanvas;
    protected moveSnake = moveSnake;
    protected checkPosibleMove = checkPosibleMove;
    protected makeCherry = makeCherry;
    protected checkDead = checkDead;
    protected backGroundCanvas = backGroundCanvas;

    protected canvas : HTMLCanvasElement;
    protected backCanvas : HTMLCanvasElement;
    public ctx : CanvasRenderingContext2D | undefined;
    public ctxBack : CanvasRenderingContext2D | undefined;
    public gridSize : number;
    public cellSize : number;

    public canvasWidth : number;
    public canvasHeight : number;

    public Player : playerT = {
        tails : [[0, 0]],
        cherry : [],
        directions : "",
        deadInfo : false
    }

    constructor(refCanvas : HTMLCanvasElement, backCanvas : HTMLCanvasElement, gridSize : number) {
        this.canvas = refCanvas;
        this.backCanvas = backCanvas;
        this.gridSize = gridSize;
        
        this.canvasHeight = 600;
        this.canvasWidth = 600;
        this.cellSize = this.canvasWidth / gridSize;

        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;

        this.backCanvas.width = this.canvasWidth;
        this.backCanvas.height = this.canvasHeight;

        
        if (this.canvas !== null) {
            let n = this.gridSize;
            let x : number = Math.floor(n / 2);
            let y : number = Math.floor(n / 2);

            this.Player.tails = [[x, y], [-1, -1], [-1, -1]];

            this.ctx = this.canvas.getContext('2d')!;      
            this.ctxBack = this.backCanvas.getContext('2d')!;      

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

            for (let k = 0; k < 10; k++) {
                this.makeCherry();
            }
            this.backGroundCanvas();
            this.update();
        }
    }

    public update() {
        if (!this.Player.deadInfo) {
            this.moveSnake();
        } else {
            // this.moveSnake();
            console.log("you dead ;D");
        }
        this.drawCanvas();
        setTimeout(() => this.update(), 125);
    }
}