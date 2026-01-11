import Image from "next/image";

export default function BasicLogo({ isInverted }: { isInverted?: boolean }) {
  return (
    <div className="flex-center relative aspect-[146/24] ">
      <Image
        src="/logo.svg"
        alt="Logo"
        fill
        className={`object-contain ${isInverted ? "invert" : ""}`}
        priority
      />
    </div>
  );
}
