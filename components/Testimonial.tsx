export default function Testimonial({
  imageUrl,
  name,
  title,
  testimonial,
}: {
  imageUrl: string;
  name: string;
  title: string;
  testimonial: string;
}) {
  return (
    <div className="border-[1px] border-borderColor">
      <div className="flex items-end">
        <div className="mr-8 aspect-square">
          <img className="h-20" src={imageUrl} alt="" />
        </div>
        <div>
          <h3 className="text-xl text-primaryGreen">{name}</h3>
          <h4 className="mt-1 font-sansAlt text-2xs uppercase">{title}</h4>
        </div>
      </div>
      <div className="p-12">
        <p className="font-light leading-relaxed">{testimonial}</p>
      </div>
    </div>
  );
}
