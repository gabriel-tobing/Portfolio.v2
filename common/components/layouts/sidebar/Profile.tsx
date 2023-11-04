"use client";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { useMenu } from "@/stores/menu";

import useIsMobile from "@/hooks/useIsMobile";

import ToggleThemeIcon from "@/common/components/elements/ToggleThemeIcon";

import MobileMenu from "@/common/components/layouts/sidebar/MobileMenu";
import MobileMenuButton from "@/common/components/layouts/sidebar/MobileMenuButton";
import ProfileHeader from "@/common/components/layouts/sidebar/ProfileHeader";

export default function Profile() {
  const isMobile = useIsMobile();
  const imageSize = isMobile ? 40 : 100;
  const { isOpen, toggleMenu } = useMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={clsx(
        "z-20 fixed shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-white dark:bg-dark lg:!bg-transparent w-full p-5 lg:relative lg:p-0",
        isOpen && "pb-0"
      )}
    >
      <div className="flex items-start justify-between lg:flex-col lg:space-y-4">
        <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
        {isMobile && (
          <div
            className={clsx(
              "flex lg:hidden items-center gap-5 mt-2",
              isOpen && "!items-end flex-col-reverse justify-between h-[120px] pb-1"
            )}
          >
            <ToggleThemeIcon />
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        )}
      </div>
      {isMobile && <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>}
    </div>
  );
}
