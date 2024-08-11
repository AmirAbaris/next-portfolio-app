import React from 'react'

interface SectionHeaderProps {
    title: string;
    subTitle: string;
}
const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
    return (
        <div className='flex flex-col gap-y-2 text-center w-full'>
            <h1 className='text-base text-darkGrey'>{subTitle}</h1>
            <h2 className='text-5xl text-black font-extrabold'>{title}</h2>
        </div>
    );
}

export default SectionHeader;
