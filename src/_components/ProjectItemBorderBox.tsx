import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';

interface ProjectItemBorderBoxProps {
    imagePath: string;
    title: string;
    githubLink: string;
}

const ProjectItemBorderBox = ({ imagePath, title, githubLink }: ProjectItemBorderBoxProps) => {
    return (
        <div className='border border-mediumGrey rounded-3xl text-center p-6 flex flex-col gap-y-8'>
            <Image className='rounded-[2rem] w-full h-auto flex-1 object-cover' src={imagePath} width={0} height={0} sizes='100vh' alt={title} />
            <h1 className="text-3xl font-semibold">{title}</h1>
            <Link href={githubLink} target='_blank'>
                <PrimaryButton>Github</PrimaryButton>
            </Link>
        </div>
    );
}

export default ProjectItemBorderBox;
