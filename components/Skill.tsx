export default function Skill({ icon }: { icon: string }) {
  return (
    <i
      className={[
        icon,
        "opacity-10",
        "hover:opacity-100",
        "duration-500",
        "transition-all",
      ].join(" ")}
    ></i>
  );
}
