import Image from "next/image";

export default function NearestOnesSection() {
  return (
    <section className="pb-24">
      <div className="content-max-width flex-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
          <div className="w-full max-w-60 aspect-square relative ">
            <Image src="/images/hands-family.png" alt="ikona rodziny" fill />
          </div>

          <div className="text-center md:text-left max-w-max">
            <h2 className="text-xl md:text-[2rem] font-extrabold italic   mb-4">
              Dotyczy to naszych najbliższych
            </h2>

            <p className="text-sm  /80 leading-relaxed max-w-xl">
              To są mieszkańcy Twojej gminy. Twoi sąsiedzi. Rodzice, dzieci,
              seniorzy. <br />
              To przyszli pacjenci lokalnych ośrodków zdrowia i dzieci z
              problemami psychoruchowymi w szkołach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
