import AboutMe from "~/_components/AboutMe";
import ProfileOverview from "~/_components/ProfileOverview";
import SectionHeader from "~/_components/SectionHeader";
import SkillCardBorderBox from "~/_components/SkillCardBorderBox";
import { type SkillCardItemProps } from "~/types/skillCardItem";

export default function HomePage() {
  // TODO: place skill in a better place
  const skills: SkillCardItemProps[] = [
    { skillName: "HTML", skillLevel: "Experienced" },
    { skillName: "CSS", skillLevel: "Experienced" },
    { skillName: "JavaScript", skillLevel: "Basic" }
  ];
  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-y-28">
        <ProfileOverview />
        <SectionHeader subTitle="Get To Know More " title="About Me" />
        <AboutMe />
        <SectionHeader subTitle="Explore My " title="Experience" />

        <SkillCardBorderBox skillCardItem={skills} />
      </div>
    </main>
  );
}