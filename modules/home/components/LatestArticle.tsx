"use client";

import useSWR from "swr";
import { HiOutlineNewspaper } from "react-icons/hi";

import { fetcher } from "@/services/fetcher";

import { DEVTO_BLOG_API } from "@/common/constant";

import { BlogItem } from "@/common/types/blog";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

import LoadingLatestArticle from "@/modules/home/components/LoadingLatestArticle";
import LatestArticleCard from "@/modules/home/components/LatestArticleCard";

export default function LatestArticle() {
  const { data, isLoading } = useSWR(DEVTO_BLOG_API, fetcher, {
    revalidateOnMount: true,
  });

  const articles: BlogItem[] = data?.slice(0, 4);

  return (
    <section>
      <div className="space-y-2">
        <SectionHeading title="Latest Articles" icon={<HiOutlineNewspaper className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">Latest articles from dev.to</p>
        </SectionSubHeading>
      </div>
      <div className="flex flex-row h-40 overflow-y-hidden space-x-3 mt-6 overflow-x-scroll no-scrollbar">
        {isLoading
          ? [1, 2, 3, 4].map((item) => <LoadingLatestArticle key={item} />)
          : articles.map((article) => <LatestArticleCard data={article} key={article.id} />)}
      </div>
    </section>
  );
}
