import {usePress} from "../../hooks/usePress"
import styles from "./canvas.module.scss"
import { FC, useRef, useEffect } from 'react';
import { SnakeGame } from './snake/';

export const SnakeCanvas : FC = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  var someStr : string = "s";
  const someValue = usePress(someStr);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
        new SnakeGame(canvas);
    }

    return () => {
        canvasRef.current = null
    }
  }, [])

  return (
    <>
    <canvas ref={canvasRef} className ={styles.canvas} ></canvas>
    {someValue && <h1>{someStr}</h1>}
    </>
  )
}