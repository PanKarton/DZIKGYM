type CTAProps = {
  children: React.ReactNode;
  variant?: "red" | "blue" | "blueTaller" | "redWide" | "blueGradient";
};

const variantClasses = {
  red: "bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-3 text-white hover:bg-(--redHover) aspect-[230/64]",
  redWide:
    "py-3 text-white aspect-[252/56] bg-gradient-to-r from-red-600 via-red-700 to-red-800",
  blue: "bg-transparent py-1 border-[2px] border-[--blue] text-(--blue)  hover:bg-(--blue) hover:text-white aspect-[252/56]",
  blueTaller:
    "bg-transparent py-1 border-[2px] border-[--blue] text-(--blue)  hover:bg-(--blue) hover:text-white aspect-[200/56]",
  blueGradient:
    "py-3 text-white aspect-[252/56] bg-gradient-to-r from-[#00B4DE] to-[#005B70] hover:brightness-110",
};

export default function CTA({ children, variant }: CTAProps) {
  return (
    <button
      className={`w-full transition-colors cursor-pointer cta-path flex items-center justify-center gap-2 ${
        variant ? variantClasses[variant] : ""
      }`}
    >
      {children}
    </button>
  );
}
