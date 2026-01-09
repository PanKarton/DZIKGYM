import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t p-4 flex flex-col items-center gap-4 text-(--primary) pt-20">
      <div className="w-full hero-rounded relative pl-62 py-24 clip-hero">
        <div>
          <div className="absolute inset-0 bg-black/80 z-[-1]" />
          <h2 className="h2-footer font-bold italic mb-3">Marka DZIK</h2>
          <p className="text-sm/[1.5] font-regular max-w-[33rem] mb-12 ">
            DZIK® to marka sportowa założona w piwnicy przez czterech młodych
            przyjaciół, obecnie dająca zatrudnienie około 200 osobom. Wszystko
            zaczęło się od twórczości internetowej, <br />
            aby z czasem ewoluować w wielomilionowy biznes. W ofercie firmy
            znajdują się ubrania sportowe, suplementy diety i żywność
            funkcjonalna.
          </p>
          <button>Wejdź na wkdzik.pl -</button>
          <Image
            src="/footer-top-background.jpg"
            alt="tło stopki siłownia plenerowa"
            fill
            className="object-cover z-[-2] "
            sizes="100vw"
          />
        </div>
      </div>
      <div className="bg-gray-900 h-16 w-full rounded-[10px]"></div>
    </footer>
  );
}
