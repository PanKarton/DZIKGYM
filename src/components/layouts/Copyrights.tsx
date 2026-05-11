import BasicLogo from "@/components/ui/BasicLogo";

export default function Copyrights() {
  return (
    <div className="w-full flex justify-center flex-wrap xl:justify-start align-center   gap-x-8 gap-y-4 px-4 xl:px-32 pb-4 ">
      <div className="w-30 ">
        <BasicLogo isInverted={true} />
      </div>
      <p className="text-(--color-text-muted) text-xs leading-loose text-center">
        {`©${new Date().getFullYear()} WKDZIK.pl. Wszelkie prawa zastrzeżone. `}
      </p>
    </div>
  );
}
