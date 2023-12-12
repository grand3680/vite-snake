import { directionT } from 'types.ts';

export function handleMobileMovement(e: TouchEvent) : [number, number] {
    var xDown: number;
    var yDown: number;
    
    var getTouches = (evt: any) => evt.touches;

    const firstTouch = getTouches(e)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;

    return [xDown, yDown];
}    

export var handleTouchMove = (evt: any, xDown? : number, yDown? : number): directionT => {
    if (!xDown || !yDown) return "";

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) return (xDiff > 0 ? "left" : "right");
    if (Math.abs(xDiff) < Math.abs(yDiff)) return (yDiff > 0 ? "up" : "down");

    return "";
};