"use client";

import { useEffect, useRef, useState } from "react";

export default function NumberIncreasing({
  target,
  isPercentage,
}: {
  target: number;
  isPercentage?: boolean;
}) {
  const [number, setNumber] = useState(0);
  const elementRef = useRef<HTMLParagraphElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrameId: number;

    const startAnimation = () => {
      const duration = 1500;
      const startTime = Date.now();

      const updateNumber = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setNumber(Math.floor(easedProgress * target));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateNumber);
        }
      };

      animationFrameId = requestAnimationFrame(updateNumber);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target]);

  return (
    <p
      ref={elementRef}
      className="text-[5.375rem] leading-none font-black italic text-(--color-brand-red) mb-2"
    >
      {isPercentage ? `${number}%` : number}
    </p>
  );
}
