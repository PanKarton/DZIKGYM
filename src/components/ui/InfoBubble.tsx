import { IoIosInformationCircleOutline } from "react-icons/io";

const styles = {
  bubble: {
    animationStyles:
      "opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto",
  },
  leftTranslate: "left-full -translate-x-full",
  rightTranslate: "left-0",
  leftPadding: "pl-[4.25rem] pr-12",
  rightPadding: "pl-12 pr-[4.25rem]",
};

export default function InfoBubble({
  textSmall,
  textBold,
  isLeft,
}: Readonly<{ textSmall?: string; textBold?: string; isLeft?: boolean }>) {
  return (
    <div className="relative bg-(--primary) text-(--blue) text-5xl flex-center aspect-square rounded-full group z-[2]">
      <IoIosInformationCircleOutline />
      {/* Hover bubble */}
      <div
        className={`absolute top-1/2 -translate-y-1/2  z-[-1] min-w-max  ${
          styles.bubble.animationStyles
        } ${isLeft ? styles.leftTranslate : styles.rightTranslate}`}
      >
        <div
          className={`bg-(--primary) py-6 rounded-full shadow-xl flex-col flex-left text-left ${
            isLeft ? styles.rightPadding : styles.leftPadding
          }`}
        >
          <div className="text-(--offWhiteDarker) text-sm ">{textSmall}</div>
          <div className="font-bold text-(--blue) text-2xl">{textBold}</div>
        </div>
      </div>
    </div>
  );
}
