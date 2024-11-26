import AboutMeBorderBox from "./AboutMeBorderBox";
import ImageWithLoader from "./ImageWithLoader";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      <div className="mx-auto w-4/5 md:w-2/3 lg:w-1/2">
        <ImageWithLoader
          src="/images/prof2.jpg"
          alt="Amir's secondary photo"
          borderRadius="rounded-3xl"
          className="aspect-square"
        />
      </div>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:px-0">
        <AboutMeBorderBox
          iconPath="/images/medal.svg"
          title="Experience"
          subTitle="frontend dev at Nilasoft for 3 months + 6 months internship"
        />
        <AboutMeBorderBox
          iconPath="/images/person.svg"
          title="Education"
          subTitle="Computer Science Student"
        />
        <p className="col-span-full">
          I kicked off my journey with a 6-month internship, diving deep into
          Angular&apos;s world. After mastering components, services, and core
          concepts, I decided to explore new horizons and transitioned to
          Next.js. Now, I&apos;m on a mission to craft snappy, seamless user
          experiences and bring powerful applications to life using React and
          Next.js&apos;s robust ecosystem, leveraging features like server-side
          rendering and static site generation.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
