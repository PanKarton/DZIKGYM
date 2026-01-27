"use client";

import { useEffect, useState } from "react";

export default function PercentageIncreasing({ target }: { target: number }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const targetPercentage = target;
    const duration = 1500; // milliseconds
    const startTime = Date.now();

    const updatePercentage = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic function for acceleration at the beginning and deceleration at the end
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setPercentage(Math.floor(easedProgress * targetPercentage));

      if (progress < 1) {
        requestAnimationFrame(updatePercentage);
      }
    };

    requestAnimationFrame(updatePercentage);

    return () => {
      // Cleanup if needed, though requestAnimationFrame handles its own lifecycle
    };
  }, [target]);

  return (
    <p className="text-[5.375rem] leading-none font-black italic text-(--color-brand-red) mb-2">
      {percentage}%
    </p>
  );
}
