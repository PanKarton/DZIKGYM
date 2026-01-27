import localFont from "next/font/local";

export const myFontConfig = localFont({
  src: [
    {
      path: "./Obviously-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Obviously-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Obviously-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Obviously-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Obviously-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Obviously-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Obviously-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-obviously",
  display: "swap",
});
