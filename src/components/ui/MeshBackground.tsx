import Image from "next/image";

export const MeshBackground = ({ z }: { z: string }) => {
  return (
    <Image
      src="/images/sub-hero-pattern.png"
      alt="Tło sekcji sub-hero"
      fill
      className={`object-cover z-${z}`}
    />
  );
};
