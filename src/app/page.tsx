import AboutMe from "~/_components/AboutMe";
import ProfileOverview from "~/_components/ProfileOverview";
import ProjectItemBorderBox from "~/_components/ProjectItemBorderBox";
import SectionHeader from "~/_components/SectionHeader";
import SkillCardBorderBox from "~/_components/SkillCardBorderBox";
import { devSkills, generalSkills } from "~/data/skills";

export default function HomePage() {

  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center gap-y-28">
        <ProfileOverview />
        <SectionHeader subTitle="Get To Know More " title="About Me" />
        <AboutMe />
        <SectionHeader subTitle="Explore My " title="Experience" />
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <SkillCardBorderBox skillCardItem={devSkills} />
          <SkillCardBorderBox skillCardItem={generalSkills} />
        </div>
        <SectionHeader subTitle="Browse My Recent " title="Projects" />
        <div className="flex flex-col gap-8 md:flex-row">
          <ProjectItemBorderBox imagePath="/images/test-temp.jpg" title="Project Title" githubLink="https://github.com/" />
          <ProjectItemBorderBox imagePath="/images/test-temp.jpg" title="Project Title" githubLink="https://github.com/" />
        </div>
      </div>
    </main>
  );
}