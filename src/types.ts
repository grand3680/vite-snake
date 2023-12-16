export type directionT = "up" | "down" | "left" | "right" | "";
export type tailsT = [x : number, y : number][];

export type playerT = {
    tails : tailsT,
    cherry : tailsT, 
    directions : directionT,
    deadInfo : boolean
}