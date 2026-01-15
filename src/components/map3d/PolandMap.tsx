"use client";

import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import type { CameraControls as CameraControlsType } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { PolandMesh } from "./PolandMesh";

function StepZoom({
  wrapperRef,
  initialDistance = 9,
  steps = 3,
  stepSize = 0.8,
}: {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  initialDistance?: number;
  steps?: number;
  stepSize?: number;
}) {
  const controlsRef = useRef<CameraControlsType | null>(null);
  const levelRef = useRef(0);

  const distances = useMemo(
    () =>
      Array.from(
        { length: steps + 1 },
        (_, i) => initialDistance - i * stepSize
      ),
    [initialDistance, steps, stepSize]
  );

  // Ustaw startowy zoom (pierwotny render) po mount
  useEffect(() => {
    const c = controlsRef.current;
    if (!c) return;

    levelRef.current = 0;
    c.dollyTo(distances[0], false);
    c.setTarget(0, 0, 0, false);
  }, [distances]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Zoom tylko gdy scroll w dół
      if (e.deltaY <= 0) return;
      if (!e.ctrlKey && !e.metaKey) return;
      if (levelRef.current >= steps) return;

      levelRef.current += 1;

      const c = controlsRef.current;
      if (!c) return;

      console.log("dupa");
      c.dollyTo(distances[levelRef.current], true);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [wrapperRef, distances, steps]);

  return (
    <CameraControls
      ref={controlsRef}
      makeDefault
      // blokujemy obrót i przesuwanie – zostaje tylko dolly (zoom)
      azimuthRotateSpeed={0}
      polarRotateSpeed={0}
      truckSpeed={0}
      // nie pozwól oddalić ponad start i nie pozwól przybliżyć poza max level
      maxDistance={distances[0]}
      minDistance={distances[steps]}
    />
  );
}

export default function PolandMapScene() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={wrapperRef} className="relative w-full aspect-map ">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 3.2, 9], fov: 18 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 8, 4]} intensity={1.1} />
        <directionalLight position={[-6, 4, -4]} intensity={0.4} />

        <Suspense fallback={null}>
          <StepZoom
            wrapperRef={wrapperRef}
            initialDistance={9}
            steps={3}
            stepSize={0.8}
          />
          <PolandMesh url="/poland-shape.svg" />
        </Suspense>
      </Canvas>
    </div>
  );
}
