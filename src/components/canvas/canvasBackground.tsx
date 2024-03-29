import styles from "./canvas.module.scss"
import { FC, useRef, useEffect, useState } from 'react';
import { SnakeGame } from './snake/';
import {SettingPoopUp} from '../settings'

export const SnakeCanvas : FC = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const canvasBackgroundRef = useRef<null | HTMLCanvasElement>(null);
  var [someValue, someFun] = useState(20);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasBack = canvasBackgroundRef.current;

    if (canvas && canvasBack) {
        new SnakeGame(canvas, canvasBack, someValue);
    }

    return () => {
        canvasRef.current = null;
        canvasBackgroundRef.current = null;
    }
  })

  return (
    <>
    <section className={styles.sectionCanvas}>
      <canvas ref={canvasRef} className ={styles.canvas} ></canvas>
      <canvas ref={canvasBackgroundRef} className ={styles.canvasBack}></canvas>
    </section>
    <SettingPoopUp/>
    
    <button onClick={() => someFun(someValue + 1)}>
        click Mee
    </button>      
    {someValue}
    </>
  )
}