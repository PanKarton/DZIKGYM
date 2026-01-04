import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div>
        <div className="border border-red-500 w-66 h-44 p-4 flex items-center justify-center relative">
          <Image
            src="/logo-color.svg"
            alt="Logo z kolorami"
            width={265}
            height={175}
          />
        </div>
        <h1>SIŁOWNIE UZNANE PRZEZ SPOŁECZNOŚĆ</h1>
        <h2>
          Tworzymy miejsca, które integrują i wspierają zdrowie i formę Polaków.
        </h2>
      </div>
    </section>
  );
}
