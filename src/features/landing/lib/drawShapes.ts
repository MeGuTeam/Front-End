import { Shape } from "../types";
import drawSakura from "./drawSakura";

const drawShapes = (
  ctx: CanvasRenderingContext2D,
  shapes: Shape[],
  canvas: HTMLCanvasElement
) => {
  shapes.forEach((shape) => {
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle = "rgba(148, 163, 184, 0.7)";
    ctx.lineWidth = 1;

    if (shape.type === 'sakura') {
      drawSakura(ctx, shape.x, shape.y, shape.size, shape.rotation);
    } else {
      ctx.beginPath();
      ctx.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2);
      ctx.stroke();
    }

    shape.rotation += shape.rotationSpeed;
    shape.x += Math.sin(shape.rotation) * 0.1;
    shape.y += Math.cos(shape.rotation) * 0.1;

    if (
      shape.x < -shape.size * 2 ||
      shape.x > canvas.width + shape.size * 2 ||
      shape.y < -shape.size * 2 ||
      shape.y > canvas.height + shape.size * 2
    ) {
      shape.x = Math.random() * canvas.width;
      shape.y = Math.random() * canvas.height;
    }
  });
};

export default drawShapes;