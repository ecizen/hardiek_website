"use client";
import { useEffect, useRef } from "react";

export default function MaskCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cursor = { x: -50, y: -50, radius: 12 };

    const move = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };
    window.addEventListener("mousemove", move);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ambil pixel di bawah cursor
      const pixel = ctx.getImageData(cursor.x, cursor.y, 1, 1).data;
      const isWhite = pixel[0] === 255 && pixel[1] === 255 && pixel[2] === 255;

      // gambar cursor
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, cursor.radius, 0, Math.PI * 2);
      ctx.fillStyle = isWhite ? "black" : "white";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "white";
      ctx.stroke();

      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 pointer-events-none z-[9999]" />;
}
