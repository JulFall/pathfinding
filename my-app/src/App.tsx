import {useRef, useState, useEffect } from 'react'
import './App.css'
function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasHeight = 500;
  const canvasWidth = 500;

  function drawBoard(){
    const canvas = canvasRef.current;
    if (!canvas) return;
 
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth,canvasHeight);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    var x=0;
    var y = 0;
    for(let i=0;i<10;i++){
      for(let j=0;j<10;j++){
        ctx.save();
        y=i*50
        x=j*50
        ctx.strokeRect(x, y, 50, 50);
        ctx.restore();
      }
    }

  }
  useEffect(() => {
    drawBoard();
  }, []);

  return (
    <>
    <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "1px solid #000000ff"}}
      />
    </>
  )
}

export default App