import PrimaryButton from './PrimaryButton';
import Link from 'next/link';
import ImageWithLoader from './ImageWithLoader';
import { memo } from 'react';

interface ProjectItemBorderBoxProps {
    imagePath: string;
    title: string;
    githubLink: string;
}

const ProjectItemBorderBox = memo(({ imagePath, title, githubLink }: ProjectItemBorderBoxProps) => {
    return (
        <div className='border border-mediumGrey rounded-3xl text-center p-6 flex flex-col gap-y-8'>
            <ImageWithLoader src={imagePath} alt={title} borderRadius='rounded-3xl' className='flex-1 object-cover aspect-video' />
            <h1 className="text-3xl font-semibold">{title}</h1>
            <Link href={githubLink} target='_blank'>
                <PrimaryButton>Github</PrimaryButton>
            </Link>
        </div>
    );
});

// Add a display name to the memoized component
ProjectItemBorderBox.displayName = 'ProjectItemBorderBox';

export default ProjectItemBorderBox;