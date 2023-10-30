import { 
    mapGrid,
    drawCanvas
} from "./index"


export class Game {
    protected drawCanvas = drawCanvas;
    protected mapGrid = mapGrid;

    protected canvas : HTMLCanvasElement;
    public ctx : CanvasRenderingContext2D | undefined;
    public gridSize : number;
    public cells : any[];
    public Player : {
        tails? : [x? : number, y? : number][];
        cherry? : any[];
    } = {}


    constructor(refCanvas : HTMLCanvasElement, gridSize : number = 10) {
        this.canvas = refCanvas;
        this.Player.tails = [[]];
        this.Player.cherry = [];
        this.cells = this.mapGrid();
        this.gridSize = gridSize;
        
        if (this.canvas !== null) {
            var n = this.gridSize;
            var x : number = Math.floor(n / 2);
            var y : number = Math.floor(n / 2);

            this.Player.tails = [[x, y], [x, y], [x, y]];

            this.ctx = this.canvas.getContext('2d')!;            
            this.update();
        }

    }

    public update() {
        if (this.ctx == undefined) return;      
        this.drawCanvas();
        setTimeout(() => this.update(), 100);
    }
}