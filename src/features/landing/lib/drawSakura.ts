const drawSakura = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.fillStyle = "rgba(148, 163, 184, 0.7)";

  const petalSize = size / 2;
  for (let i = 0; i < 5; i++) {
    const angle = (i * 2 * Math.PI) / 5;
    ctx.beginPath();
    ctx.ellipse(
      petalSize * Math.cos(angle),
      petalSize * Math.sin(angle),
      petalSize,
      petalSize * 0.6,
      angle,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
};

export default drawSakura;