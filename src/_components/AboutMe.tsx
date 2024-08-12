import Image from 'next/image';
import AboutMeBorderBox from './AboutMeBorderBox';

const AboutMe = () => {
    return (
        <div className='grid grid-cols-1 gap-y-10 items-center lg:grid-cols-2'>
            <div className='w-[11rem] lg:w-[23rem] mx-auto'>
                <Image
                    className="rounded-3xl w-full h-auto object-cover aspect-square"
                    src="/images/prof2.jpg"
                    height={3024}
                    width={4032}
                    alt="Amir's secondary photo"
                />
            </div>
            <div className='grid grid-cols-1 gap-8 px-16 w-full sm:grid-cols-2 lg:px-0 lg:grid'>
                <AboutMeBorderBox iconPath='/images/medal.svg' title='Experience' subTitle='6 Months Frontend Internship' />
                <AboutMeBorderBox iconPath='/images/person.svg' title='Education' subTitle='Computer Science Student' />
                <p className='col-span-full'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem,
                    dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit
                    in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                    reiciendis ea magnam? Nulla, impedit fuga!
                </p>
            </div>
        </div>
    );
}

export default AboutMe;