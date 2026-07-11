"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string;
}

export function Counter({ value }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/^([0-9,.]+)(.*)$/);
  const target = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView || target === 0) return;

    let startTimestamp: number | null = null;
    const duration = 1600; // 1.6s counting animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = progress * (2 - progress); // Ease out quad
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {target === 0 ? value : `${count.toLocaleString()}${suffix}`}
    </span>
  );
}
