import Image from "next/image";

export default function SubHero({
  heading,
  subheading,
  children,
}: {
  heading: string;
  subheading: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-4 py-2 border  text-(--color-primary) relative h-106">
      <div className="relative ">
        <div className="   h-full clip-sub-hero ">
          <Image
            src="/images/sub-hero-pattern.png"
            alt="Tło sekcji sub-hero"
            fill
            className="object-cover z-1"
          />
          <div className="absolute inset-0 sub-hero-gradient z-2"></div>
          <div className="absolute inset-0 bg-black z-0"></div>
          <div className="relative z-3 flex flex-col items-center justify-center gap-8 text-center pt-35 pb-20">
            <h1 className="font-black text-[3.875rem] italic leading-none">
              {heading}
            </h1>
            <p className="font-thin text-xl">{subheading}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
