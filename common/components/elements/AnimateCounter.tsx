"use client";

import { HTMLProps, useEffect, useRef } from "react";
import { AnimationPlaybackControls, animate } from "framer-motion";

interface AnimateCounterProps extends HTMLProps<HTMLSpanElement> {
  total: number;
}

export default function AnimateCounter({ total, ...rest }: AnimateCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);

  const initialCount = 0;

  useEffect(() => {
    const count = countRef.current;

    const controls: AnimationPlaybackControls = animate(initialCount, total, {
      duration: 1,
      onUpdate: (value) => {
        if (count) {
          count.textContent = Math.floor(value).toString();
        }
      },
    });

    return () => controls.stop();
  }, [total]);

  return <span {...rest} ref={countRef} />;
}
