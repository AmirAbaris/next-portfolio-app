import AboutMe from "~/_components/AboutMe";
import ProfileOverview from "~/_components/ProfileOverview";
import SectionHeader from "~/_components/SectionHeader";
import SkillCardBorderBox from "~/_components/SkillCardBorderBox";
import { devSkills, generalSkills } from "~/data/skills";

export default function HomePage() {

  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-y-28">
        <ProfileOverview />
        <SectionHeader subTitle="Get To Know More " title="About Me" />
        <AboutMe />
        <SectionHeader subTitle="Explore My " title="Experience" />
        <div className="flex justify-center gap-x-8">
          <SkillCardBorderBox skillCardItem={devSkills} />
          <SkillCardBorderBox skillCardItem={generalSkills} />
        </div>
      </div>
    </main>
  );
}