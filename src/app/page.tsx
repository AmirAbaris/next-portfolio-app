import AboutMe from "~/_components/AboutMe";
import ContactMeBorderBox from "~/_components/ContactMeBorderBox";
import ProfileOverview from "~/_components/ProfileOverview";
import ProjectItemBorderBox from "~/_components/ProjectItemBorderBox";
import SectionHeader from "~/_components/SectionHeader";
import SkillCardBorderBox from "~/_components/SkillCardBorderBox";
import { devSkills, generalSkills } from "~/data/skills";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center gap-y-56">
        <ProfileOverview />
        <SectionHeader subTitle="Get To Know More " title="About Me" />
        <AboutMe />
        <div className="flex flex-col gap-y-12">
          <SectionHeader subTitle="Explore My " title="Experience" />
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <SkillCardBorderBox skillCardItem={devSkills} />
            <SkillCardBorderBox skillCardItem={generalSkills} />
          </div>
        </div>
        <div className="flex flex-col gap-y-12">
          <SectionHeader subTitle="Browse My Recent" title="Projects" />
          <div className="flex flex-col gap-8 md:flex-row">
            <ProjectItemBorderBox imagePath="/images/dash.png" title="Dashboard Project" githubLink="https://github.com/AmirAbaris/dashboard" />
            <ProjectItemBorderBox imagePath="/images/epic.png" title="Epic Games Mock Project" githubLink="https://github.com/AmirAbaris/epic-games" />
          </div>
        </div>
        <div className="flex flex-col gap-y-12">
          <SectionHeader subTitle="Get in Touch" title="Contact Me" />
          <ContactMeBorderBox />
        </div>
      </div>
    </main>
  );
}