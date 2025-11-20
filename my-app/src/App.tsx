import { useRef, useEffect } from 'react'
import './App.css'
import dijkstraImg from "./assets/dijkstra.png";
import filippaImg from "./assets/filippa.png";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasHeight = 500;
  const canvasWidth = 500;

  function drawBoard(img1: HTMLImageElement, img2: HTMLImageElement) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const x = j * 50;
        const y = i * 50;

        if (i === 1 && j === 3) {
          ctx.drawImage(img1, x, y, 50, 50);
        }
        else if(i===8 && j===7){
          ctx.drawImage(img2, x, y, 50, 50);
        } else {
          ctx.strokeRect(x, y, 50, 50);
        }
      }
    }
  }

  useEffect(() => {
    const img1 = new Image();
    img1.src = dijkstraImg;
    const img2 = new Image();
    img2.src = filippaImg;

    img2.onload = () => {
      drawBoard(img1, img2);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "1px solid #000000ff" }}
      />
    </>
  )
}

export default App;
