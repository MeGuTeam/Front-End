import { useEffect, useRef } from "react";
import { Particle, Shape } from "../types";
import drawConnections from "../lib/drawConnections";
import drawParticles from "../lib/drawParticles";
import drawShapes from "../lib/drawShapes";

function useAnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const japaneseChars = [
      '桜', '花', '月', '風', '雪', '愛', '和', '夢', 
      '美', '心', '日', '本', '語', '木', '水', '火'
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeParticles = (count: number): Particle[] => {
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          life: Math.random(),
          char: japaneseChars[Math.floor(Math.random() * japaneseChars.length)],
          size: Math.random() * 12 + 8
        });
      }
      return particles;
    };

    const initializeShapes = (count: number): Shape[] => {
      const shapes: Shape[] = [];
      for (let i = 0; i < count; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 60 + 30,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.005,
          type: Math.random() > 0.5 ? 'sakura' : 'circle'
        });
      }
      return shapes;
    };

    const clearCanvas = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = initializeParticles(40);
    const shapes = initializeShapes(8);

    let animationFrameId: number;

    const animate = () => {
      clearCanvas();
      
      drawShapes(ctx, shapes, canvas);
      
      drawConnections(ctx, particles);
      
      drawParticles(ctx, particles, canvas, japaneseChars);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return canvasRef;
}

export default useAnimatedCanvas;