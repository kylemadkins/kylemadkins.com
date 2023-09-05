export const pixelate = (
  canvasEl: HTMLCanvasElement,
  imageEl: HTMLImageElement,
) => {
  if (canvasEl && imageEl) {
    const ctx = canvasEl.getContext("2d", {
      willReadFrequently: true,
    });

    if (ctx) {
      const width = imageEl.width;
      const height = imageEl.height;
      canvasEl.width = width;
      canvasEl.height = height;

      ctx.drawImage(imageEl, 0, 0, imageEl.width, imageEl.height);

      const pixels = ctx.getImageData(0, 0, width, height).data;
      const pixelSize = 16;

      for (let y = 0; y < height; y += pixelSize) {
        for (let x = 0; x < width; x += pixelSize) {
          const idx = (x + y * width) * 4;
          ctx.fillStyle = `rgba(
                ${pixels[idx]},
                ${pixels[idx + 1]},
                ${pixels[idx + 2]},
                ${pixels[idx + 3]}
              )`;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    }
  }
};
