import PrimaryButton from './PrimaryButton';
import Link from 'next/link';
import ImageWithLoader from './ImageWithLoader';

interface ProjectItemBorderBoxProps {
    imagePath: string;
    title: string;
    githubLink: string;
}

const ProjectItemBorderBox = ({ imagePath, title, githubLink }: ProjectItemBorderBoxProps) => {
    return (
        <div className='border border-mediumGrey rounded-3xl text-center p-6 flex flex-col gap-y-8'>
            <ImageWithLoader src={imagePath} alt={title} borderRadius='rounded-3xl' />
            <h1 className="text-3xl font-semibold">{title}</h1>
            <Link href={githubLink} target='_blank'>
                <PrimaryButton>Github</PrimaryButton>
            </Link>
        </div>
    );
}

export default ProjectItemBorderBox;
