import Image from "next/image";

interface AboutMeBorderBoxProps {
  iconPath: string;
  title: string;
  subTitle: string[];
}

const AboutMeBorderBox = ({
  iconPath,
  title,
  subTitle,
}: AboutMeBorderBoxProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-mediumGrey p-6 text-center">
      <Image src={iconPath} height={32} width={32} alt={title} />
      <h1 className="flex-1 text-lg font-extrabold">{title}</h1>
      <ul className="h-full list-disc place-content-center p-2 text-start text-darkGrey space-y-1">
        {subTitle.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMeBorderBox;
