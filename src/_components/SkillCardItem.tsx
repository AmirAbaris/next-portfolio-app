import { VscVerifiedFilled } from 'react-icons/vsc';
import { type SkillCardItemProps } from '~/types/skillCardItem';

const SkillCardItem = ({ skillName, skillLevel }: SkillCardItemProps) => {
    return (
        <article className='flex items-center justify-center gap-x-4'>
            <VscVerifiedFilled className='h-8 w-8 flex-shrink-0' />
            <div className='flex flex-col text-start flex-grow'>
                <h1 className='text-lg font-extrabold truncate'>{skillName}</h1>
                <p className='text-darkGrey truncate'>{skillLevel}</p>
            </div>
        </article>
    );
};

export default SkillCardItem;