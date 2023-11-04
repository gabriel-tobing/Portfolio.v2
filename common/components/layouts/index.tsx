"use client";

import React, { ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

import Sidebar from "@/common/components/layouts/sidebar";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const readMode = searchParams.get("read-mode");

  const hideSidebar = ["/me", "/board"].includes(pathname) || readMode == "true";

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10">
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-5">
        {!hideSidebar && (
          <header>
            <Sidebar />
          </header>
        )}
        <main className="lg:max-w-[854px] transition-all scroll-smooth duration-300 w-full lg:min-h-screen no-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
