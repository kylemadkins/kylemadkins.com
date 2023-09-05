export default function PixelatedImage({
  imageUrl,
  pixelatedImageUrl,
  className,
}: {
  imageUrl: string;
  pixelatedImageUrl: string;
  className: string;
}) {
  return (
    <div className={["pixelatedImage", className].join(" ")}>
      <img
        className="absolute h-full w-full object-cover"
        src={pixelatedImageUrl}
        alt=""
      />
      <img
        className="absolute h-full w-full object-cover"
        src={imageUrl}
        alt=""
      />
    </div>
  );
}
