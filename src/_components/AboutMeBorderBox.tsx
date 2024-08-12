import Image from 'next/image';

interface AboutMeBorderBoxProps {
  iconPath: string;
  title: string;
  subTitle: string;
}
const AboutMeBorderBox = ({ iconPath, title, subTitle }: AboutMeBorderBoxProps) => {

  return (
    <div className='border border-mediumGrey rounded-3xl p-6 text-center aspect-video flex flex-col items-center justify-center w-full'>
      <Image
        src={iconPath}
        height={32}
        width={32}
        alt={title}
      />
      <h1 className='font-extrabold text-lg'>{title}</h1>
      <p className='text-darkGrey'>{subTitle}</p>
    </div>
  );
}

export default AboutMeBorderBox;
