import { lazy } from "react";

import BreakLine from "@/common/components/elements/BreakLine";

import Introduction from "@/modules/home/components/Introduction";
import LatestArticle from "@/modules/home/components/LatestArticle";
import CareerList from "@/modules/home/components/CareerList";

const SkillList = lazy(() => import("@/modules/home/components/SkillList"));

export default function Home() {
  return (
    <>
      <Introduction />
      <BreakLine className="my-6" />
      <LatestArticle />
      <BreakLine className="my-6" />
      <CareerList />
      <BreakLine className="my-6" />
      <SkillList />
    </>
  );
}
