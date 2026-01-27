import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";

const team = [
  {
    name: "Damian",
    lastName: "Dąbrowski",
    email: "gym@wkdzik.pl",
    image: "/placeholder.jpg",
  },
  {
    name: "Damian",
    lastName: " Dąbrowski",
    email: "gym@wkdzik.pl",
    image: "/placeholder.jpg",
  },
  {
    name: "Damian",
    lastName: "Dąbrowski",
    email: "gym@wkdzik.pl",
    image: "/placeholder.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-(--color-primary-darker) py-24 text-center">
      <div className="content-max-width mx-auto flex-center flex-col">
        <SectionHeading className="mb-12">
          Osoby odpowiedzialne za DZIK GYM
        </SectionHeading>

        <div className="w-full grid grid-cols-3 justify-between gap-8 ">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white aspect-[420/590] rounded-3xl py-16 px-12 shadow-2xl flex flex-col items-center gap-12 transition-transform duration-100 ease-out hover:scale-102"
            >
              <div className="relative w-full aspect-[320/240] bg-gray-200 rounded-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name + " " + member.lastName}
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="border-1 py"> */}
              <h3 className="mt-4 font-bold italic   text-4xl">
                {member.name}
                <br />
                {member.lastName}
              </h3>
              <div className="flex items-center gap-2 text-sm  font-medium  ">
                <MdOutlineMail
                  style={{
                    color: "var(--color-brand-blue)",
                    fontSize: "1.5rem",
                  }}
                />
                <span>{member.email}</span>
              </div>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}
