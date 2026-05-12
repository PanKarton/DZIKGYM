import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
  description: "Strona, której szukasz, nie istnieje.",
};

export default async function NotFound() {
  return (
    <section className="relative mx-auto flex flex-col xl:min-h-svh items-center justify-center overflow-hidden pt-40 xl:pt-0">
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-1 text-[2.25rem] font-black italic text-(--color-brand-blue)">
          Błąd
        </p>

        <h1 className="text-7xl font-black italic leading-none tracking-tight text-(--color-brand-blue) sm:text-8xl md:text-[5.375rem]">
          404
        </h1>

        <h2 className="mt-3 max-w-xs text-2xl font-black italic leading-none sm:text-3xl md:text-4xl">
          Zgubiłeś się,
          <br />
          to nie ta siłka.
        </h2>

        <p className="mt-5 text-sm ">
          Wróć na{" "}
          <Link
            href="/"
            className="underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            stronę główną
          </Link>
          .
        </p>
      </div>
      <Image
        src="/images/404.png"
        alt=""
        width={1920}
        height={711}
        priority
        className="object-contain -translate-y-[20%]
        xl:absolute xl:inset-[50%] xl:-translate-y-1/2 xl:-translate-x-1/2 xl:w-full xl:aspect-1920/711 xl:object-cover
        "
      />
    </section>
  );
}
