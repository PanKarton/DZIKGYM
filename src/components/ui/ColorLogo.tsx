import Image from "next/image";

export default function ColorLogo() {
  return (
    <div className="p-4 flex items-center justify-center relative aspect-[265/175]">
      <Image
        src="/images/logo-color.svg"
        alt="Logo z kolorami"
        fill
        className={`object-contain`}
        priority
      />
    </div>
  );
}
