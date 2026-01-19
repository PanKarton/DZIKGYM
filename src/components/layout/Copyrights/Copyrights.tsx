import BasicLogo from "@/components/ui/BasicLogo";

export default function Copyrights() {
  return (
    <div className="w-full flex justify-start align-center gap-8 pl-32 pb-4">
      <div className="w-30 ">
        <BasicLogo isInverted={true} />
      </div>
      <p className="text-(--gray) text-xs leading-[2]">
        {`©${new Date().getFullYear()} WKDZIK.pl. Wszelkie prawa zastrzeżone. `}
      </p>
    </div>
  );
}
