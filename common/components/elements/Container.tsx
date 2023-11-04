"use client";

import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";

interface ContainerProps {
  childen: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
  withMarginTop?: boolean;
}

export default function Container({ children, className = "", withMarginTop = true, ...others }: ContainerProps) {
  const searchParams = useSearchParams();
  const readMode = searchParams.get("read-mode");

  return (
    <div
      data-testid="container"
      className={`mb-10 ${(readMode !== "true" || withMarginTop) && "mt-20 md:mt-6"} lg:mt-0 p-8 ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
