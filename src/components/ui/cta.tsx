type CTAProps = {
  children: React.ReactNode;
  variant?: "red" | "blue";
};

const variantClasses = {
  red: "bg-(--red) py-3 text-white hover:bg-(--redHover) aspect-[230/64]",
  blue: "bg-transparent py-1 border-[2px] border-[--blue] text-(--blue)  hover:bg-(--blue) hover:text-white aspect-[252/56]",
};

export default function CTA({ children, variant }: CTAProps) {
  return (
    <button
      className={`transition-colors cursor-pointer cta-path w-full ${
        variant ? variantClasses[variant] : ""
      }`}
    >
      {children}
    </button>
  );
}
