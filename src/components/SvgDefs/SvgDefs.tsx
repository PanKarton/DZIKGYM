export default function SvgDefs() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="customHeroClipPath" clipPathUnits="objectBoundingBox">
            <path
              d="
                M1          0.98949
                C1          0.99530   0.99738 1        0.99414 1
                H0.00586
                C0.00492    1         0        0.99530  0        0.98949
                V0.01051
                C0          0.00470   0.00263 0        0.00586 0
                H0.14077
                C0.14237    0         0.14401 0.00129  0.14517 0.00354
                L0.16852    0.05090
                C0.16959    0.05316   0.17122 0.05445  0.17307 0.05445
                H0.99414
                C0.99738    0.05445   1        0.05915  1        0.06496
                V0.98949
                Z
            "
            ></path>
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath
            id="customHeroClipPathRwd"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="M370 752.585C370 758.337 365.075 763 359 763H11C4.92488 763 0 758.337 0 752.585V10.4148C0 4.66285 4.92487 0 11 0H244.049C247.198 0 250.195 1.2772 252.283 3.50831L296.217 50.459C298.305 52.6902 301.302 53.9674 304.451 53.9674H359C365.075 53.9674 370 58.6302 370 64.3821V752.585Z"
              transform="scale(0.0027, 0.00131)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
