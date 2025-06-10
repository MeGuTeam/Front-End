import { Particle } from "../types";

export const drawParticles = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  canvas: HTMLCanvasElement,
  japaneseChars: string[]
) => {
  particles.forEach((particle) => {
    ctx.font = `${particle.size}px 'Noto Sans JP', sans-serif`;
    ctx.fillStyle = "rgba(148, 163, 184, 0.7)";
    ctx.globalAlpha = particle.life * 0.5;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(particle.char, particle.x, particle.y);

    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life -= 0.0005;

    if (
      particle.life <= 0 ||
      particle.x < -20 ||
      particle.x > canvas.width + 20 ||
      particle.y < -20 ||
      particle.y > canvas.height + 20
    ) {
      particle.x = Math.random() * canvas.width;
      particle.y = Math.random() * canvas.height;
      particle.vx = (Math.random() - 0.5) * 0.3;
      particle.vy = (Math.random() - 0.5) * 0.3;
      particle.life = Math.random();
      particle.char =
        japaneseChars[Math.floor(Math.random() * japaneseChars.length)];
    }
  });
};

export default drawParticles;