import { HiCode } from "react-icons/hi";

import { STACKS } from "@/common/constant/stacks";

import MarqueeElement from "@/common/components/elements/MarqueeElement";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

import SkillCard from "@/modules/home/components/SkillCard";

export default function SkillList() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS).sort(() => Math.random() - 0.5);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Skills" icon={<HiCode className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding skills.</p>
        </SectionSubHeading>
      </div>

      <div className="flex flex-col space-y-1 overflow-x-hidden">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement direction={index % 2 === 0 ? "left" : "right"} key={index}>
              {slider.map(([name, icon], index) => (
                <SkillCard name={name} icon={icon} key={index} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </section>
  );
}
