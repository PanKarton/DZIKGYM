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
    <section className="px-4 py-2 border text-(--primary) relative h-106">
      <div className="relative  ">
        <div className="flex flex-col items-center justify-center h-full gap-8 text-center pt-35 pb-20 sub-hero-gradient h-full clip-sub-hero ">
          <h1 className="font-black text-[3.875rem] italic leading-none">
            {heading}
          </h1>
          <p className="font-thin">{subheading}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
