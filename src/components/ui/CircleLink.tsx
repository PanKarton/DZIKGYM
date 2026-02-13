import Link from "next/link";

export default function CircleLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div className="group w-11 h-11 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white  hover:text-black nav-transition">
      <Link href={href} target="_blank" className="text-lg font-bold">
        <span className="">{children}</span>
      </Link>
    </div>
  );
}
