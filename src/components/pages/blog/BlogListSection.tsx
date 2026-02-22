import CTA from "@/components/ui/cta";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const blogData = [
  {
    slug: "Wszystko co musisz wiedzieć o masie i budowaniu mięśni",
    title: "Wszystko co musisz wiedzieć o masie i budowaniu mięśni",
    description:
      "Jak najkorzystniej przeprowadzić proces masy mięśniowej, tak by uzyskać najlepsze efekty? Sprawdź w tym artykule!",
    image: "/blog/blog-post-1.jpg",
    publishDate: "2024-06-01",
    authors: ["Jan Kowalski", "Anna Nowak"],
  },
  {
    slug: "jak-trenowac-na-silowni-plenerowej",
    title: "Jak trenować na siłowni plenerowej? Praktyczne wskazówki",
    description:
      "Trening na siłowni plenerowej może być świetnym sposobem na poprawę kondycji i zdrowia. Oto kilka praktycznych wskazówek, które pomogą Ci maksymalnie wykorzystać czas spędzony na świeżym powietrzu.",
    image: "/blog/blog-post-1.jpg",
    publishDate: "2024-06-01",
    authors: ["Jan Kowalski", "Anna Nowak"],
  },
  {
    slug: "jak-trenowac-na-silowni-plenerowej",
    title: "Jak trenować na siłowni plenerowej? Praktyczne wskazówki",
    description:
      "Trening na siłowni plenerowej może być świetnym sposobem na poprawę kondycji i zdrowia. Oto kilka praktycznych wskazówek, które pomogą Ci maksymalnie wykorzystać czas spędzony na świeżym powietrzu.",
    image: "/blog/blog-post-1.jpg",
    publishDate: "2024-06-01",
    authors: ["Jan Kowalski", "Anna Nowak"],
  },
];

export default function BlogListSection() {
  return (
    <div className="content-max-width py-24 space-y-12">
      {blogData.map((post, index) => (
        <div
          key={index}
          className="flex flex-col xl:flex-row gap-0 xl:gap-16 items-center"
        >
          <div className="w-full xl:w-[calc(50%-1rem)] relative aspect-644/361 max-w-161  bg-black/10"></div>

          <div className="max-w-161 xl:w-[calc(50%-1rem)] py-4 xl:py-12 space-y-4">
            <p className="text-sm text-gray-500 mb-2 space-x-6">
              <span>{post.publishDate}</span> <span>|</span>
              <span>{post.authors.join(", ")}</span>
            </p>
            <h2 className="text-left leading-tight text-3xl font-black italic">
              {post.title}
            </h2>

            <p className="text-sm leading-relaxed">{post.description}</p>
            <Link href="/kontakt" className="inline-block">
              <div className="w-45 ">
                <CTA variant="blueTaller">
                  <span className="font-semibold text-sm">Czytaj więcej</span>
                  <FaArrowRightLong className="relative -translate-y-px scale-[1.2]" />
                </CTA>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
