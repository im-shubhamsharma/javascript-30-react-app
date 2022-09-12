import React, { useEffect, useRef } from "react";

const HtmlCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log(canvas.height);
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 100;

    ctx.globalCompositeOperation = "multiply";

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    function draw(e) {
      if (!isDrawing) return; // stop the fn from running when they are not moused down
      console.log(e);
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      // start from
      ctx.moveTo(lastX, lastY);
      // go to
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];

      hue++;
      if (hue >= 360) {
        hue = 0;
      }
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }

      if (direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    }

    canvas.addEventListener("mousedown", (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));
  }, []);

  return (
    <div>
      <h1 style={{fontSize:"20px", textAlign:"center"}}>Start Drawing</h1>
      <canvas
        ref={canvasRef}
        className="draw"
        width="800"
        height="800"
      ></canvas>
    </div>
  );
};

export default HtmlCanvas;
