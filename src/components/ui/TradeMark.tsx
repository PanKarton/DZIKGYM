type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

const weightToSize: Record<FontWeight, string> = {
  100: "0.7em",
  200: "0.65em",
  300: "0.6em",
  400: "0.55em",
  500: "0.5em",
  600: "0.45em",
  700: "0.4em",
  800: "0.35em",
  900: "0.4em",
};

export function TrademarkText({
  children,
  fontWeight = 400,
  size,
  top = "-0.35em",
  right = "0",
}: {
  children: React.ReactNode;
  fontWeight?: FontWeight;
  size?: string;
  top?: string;
  right?: string;
}) {
  return (
    <>
      <span
        className="relative inline-block leading-none"
        style={{ paddingRight: "0.5em" }}
      >
        {" "}
        {children}
        <span
          aria-hidden="true"
          className="absolute leading-none"
          style={{
            fontSize: size ?? weightToSize[fontWeight],
            top: fontWeight === 900 ? "0" : top,
            right,
          }}
        >
          ®
        </span>
      </span>
    </>
  );
}
