type CTAVariant = "red" | "redWide" | "blue" | "blueTaller" | "blueGradient";

const base =
  "w-full flex items-center justify-center gap-2 cta-path transition-all cursor-pointer";

const variants: Record<CTAVariant, string> = {
  red: "bg-(--color-brand-red) text-white py-3 aspect-[230/64] hover:bg-(--color-brand-red-hover)",
  redWide:
    "bg-(--color-brand-red) text-white py-3 aspect-[252/56] hover:bg-(--color-brand-red-hover)",

  blue: "bg-transparent border-2 border-(--color-brand-blue) text-(--color-content-emphasis) py-1 aspect-[252/56] hover:bg-(--color-brand-blue) hover:text-white",

  blueTaller:
    "bg-transparent border-2 border-(--color-brand-blue) text-(--color-content-emphasis) py-1 aspect-[200/56] hover:bg-(--color-brand-blue) hover:text-white",

  blueGradient:
    "bg-gradient-to-r from-(--color-brand-blue) to-(--color-brand-navy) text-white py-3 aspect-[252/56] hover:brightness-110",
};

const DEFAULT_VARIANT: CTAVariant = "blue";

type CTAProps = {
  children: React.ReactNode;
  variant?: CTAVariant;
};

export default function CTA({ children, variant = DEFAULT_VARIANT }: CTAProps) {
  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
