import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { type SkillCardItemProps } from '~/types/skillCardItem';

const SkillCardItem = ({ skillName, skillLevel }: SkillCardItemProps) => {
    return (
        <div className='flex gap-x-4'>
            <div className='p-1 mt-1'>
                <RiVerifiedBadgeFill className='scale-150' />
            </div>
            <div className='flex flex-col text-start'>
                <h1 className='text-lg font-extrabold'>{skillName}</h1>
                <p className='text-darkGrey'>{skillLevel}</p>
            </div>
        </div>
    )
}

export default SkillCardItem;
