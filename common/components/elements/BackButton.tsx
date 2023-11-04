"use client";

import Link from "next/link";
import { useRouter } from "next/router";

import { FiArrowLeftCircle as BackButtonIcon } from "react-icons/fi";

type BackButtonProps = {
  url?: string;
};

export default function BackButton({ url }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (url) {
      window.location.href = url;
    } else {
      router.back();
    }
  };

  const className =
    "flex gap-2 w-max hover:gap-3 items-center pb-5 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer";

  const BackButtonChildComponent = () => {
    return (
      <>
        <BackButtonIcon size={20} data-testid="back-icon" />
        <span>Back</span>
      </>
    );
  };

  return (
    <div className="w-fit">
      {url ? (
        <Link href={url} passHref>
          <div className={className}>
            <BackButtonChildComponent />
          </div>
        </Link>
      ) : (
        <div className={className} onClick={handleClick}>
          <BackButtonChildComponent />
        </div>
      )}
    </div>
  );
}
