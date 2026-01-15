const sponsors = [
  {
    src: "/sponsors/sponsor1.svg",
    alt: "Sponsor 1",
  },
  {
    src: "/sponsors/sponsor2.svg",
    alt: "Sponsor 2",
  },
  {
    src: "/sponsors/sponsor3.svg",
    alt: "Sponsor 3",
  },
  {
    src: "/sponsors/sponsor4.svg",
    alt: "Sponsor 4",
  },

  {
    src: "/sponsors/sponsor4.svg",
    alt: "Sponsor 4",
  },
];

export default function SponsorsSection() {
  return (
    <section className="bg-(--lightGray) py-24 flex-center">
      <div className="content-max-width">
        <h2 className="text-center text-lg md:text-xl font-medium italic text-(--gray) leading-tight mb-12">
          Oni wsparli swoje społeczności:
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center  gap-x-16 gap-y-8 ">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="aspect-[4] basis-1/5 relative border-2"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
