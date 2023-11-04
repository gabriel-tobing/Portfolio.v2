"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import clsx from "clsx";

type ImageProps = {
  rounded?: string;
} & NextImageProps;

export default function Image(props: ImageProps) {
  const { alt, src, className, rounded, ...rest } = props;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={clsx("overflow-hidden", isLoading ? "animate-pulse" : "", rounded)}>
      <NextImage
        src={src}
        alt={alt}
        loading="lazy"
        quality={100}
        onLoad={() => setIsLoading(false)}
        className={clsx(
          "duration-700 ease-in-out",
          isLoading ? "scale-[1.02] blur-xl grayscale" : "scale-100 blur-0 grayscale-0",
          rounded,
          className
        )}
        {...rest}
      />
    </div>
  );
}
