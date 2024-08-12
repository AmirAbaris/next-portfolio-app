import AboutMe from "~/_components/AboutMe";
import ProfileOverview from "~/_components/ProfileOverview";
import SectionHeader from "~/_components/SectionHeader";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <ProfileOverview />
      <SectionHeader subTitle="Get To Know More " title="About Me" />
      <AboutMe />
    </main>
  );
}