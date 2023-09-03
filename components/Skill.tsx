export default function Skill({ icon }: { icon: string }) {
  return (
    <i
      className={[
        icon,
        "hover:text-white",
        "duration-500",
        "transition-all",
        "text-lightGray",
      ].join(" ")}
    ></i>
  );
}
