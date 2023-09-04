"use client";

import { useRef, useEffect } from "react";

export default function ProjectImage({ imageUrl }: { imageUrl: string }) {
  const canvasEl = useRef<HTMLCanvasElement | null>(null);
  const imageEl = useRef<HTMLImageElement | null>(null);

  function pixelateImage() {
    if (canvasEl.current && imageEl.current) {
      const ctx = canvasEl.current.getContext("2d", {
        willReadFrequently: true,
      });

      if (ctx) {
        const width = imageEl.current.width;
        const height = imageEl.current.height;
        canvasEl.current.width = width;
        canvasEl.current.height = height;

        ctx.drawImage(imageEl.current, 0, 0, width, height);

        const pixels = ctx.getImageData(0, 0, width, height).data;
        const pixelSize = 12;

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
  }

  useEffect(() => {
    pixelateImage();
  }, []);

  return (
    <div className="relative aspect-video">
      <img
        ref={imageEl}
        src={imageUrl}
        alt=""
        className="absolute h-full w-full"
      />
      <canvas
        ref={canvasEl}
        className="absolute z-10 h-full w-full opacity-0 transition-all duration-500"
      ></canvas>
    </div>
  );
}
