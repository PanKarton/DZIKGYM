"use client";

type CTAVariant =
  | "red"
  | "redWide"
  | "blue"
  | "blueTaller"
  | "blueGradient"
  | "redTransparent";

const base =
  "w-full flex items-center justify-center gap-2 cta-path transition-all cursor-pointer";

const variants: Record<CTAVariant, string> = {
  red: "bg-gradient-to-r from-(--color-brand-red) to-(--color-brand-red-hover) text-(--color-primary)  py-3 aspect-[230/64] hover:brightness-80",
  redWide:
    "bg-gradient-to-r from-(--color-brand-red) to-(--color-brand-red-hover) text-(--color-primary)  py-3 aspect-[252/56] hover:brightness-80",
  redTransparent:
    "bg-transparent border-2 border-(--color-brand-red) text-(--color-brand-red) py-1 aspect-[252/56] hover:bg-(--color-brand-red) hover:text-(--color-primary)   ",
  blue: "bg-transparent border-2 border-(--color-brand-blue) text-(--color-content-emphasis) py-1 aspect-[252/56] hover:bg-(--color-brand-blue) hover:text-(--color-primary)   ",

  blueTaller:
    "bg-transparent border-2 border-(--color-brand-blue) text-(--color-content-emphasis) py-1 aspect-[200/56] hover:bg-(--color-brand-blue) hover:text-(--color-primary)   ",

  blueGradient:
    "bg-gradient-to-r from-(--color-brand-blue) to-(--color-brand-navy) text-(--color-primary)  py-3 aspect-[252/56] hover:brightness-110",
};

const DEFAULT_VARIANT: CTAVariant = "blue";
type CTAProps = {
  children: React.ReactNode;
  variant?: CTAVariant;
  scrollToId?: string;
  isSubmit?: boolean;
};

export default function CTA({
  children,
  variant = DEFAULT_VARIANT,
  scrollToId,
  isSubmit = false,
}: CTAProps) {
  const handleClick = () => {
    if (!scrollToId) return;

    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={scrollToId ? handleClick : undefined}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
