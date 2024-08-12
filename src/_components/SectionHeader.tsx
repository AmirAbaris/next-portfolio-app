interface SectionHeaderProps {
    title: string;
    subTitle: string;
}
const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
    return (
        <div className='flex flex-col text-center'>
            <h1 className='text-base text-darkGrey'>{subTitle}</h1>
            <h2 className='text-[2rem] text-black font-extrabold md:text-5xl'>{title}</h2>
        </div>
    );
}

export default SectionHeader;
