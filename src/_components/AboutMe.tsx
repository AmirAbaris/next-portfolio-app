import Image from 'next/image';
import AboutMeBorderBox from './AboutMeBorderBox';

const AboutMe = () => {
    return (
        <div className='grid grid-rows-2 items-center gap-y-10 justify-center'>
            <div className='w-[15rem] lg:w-[23rem] items-center justify-center'>
                <Image
                    className="rounded-3xl w-full h-auto aspect-square object-cover"
                    src="/images/prof2.jpg"
                    height={3024}
                    width={4032}
                    sizes='100vw'
                    alt="amirs secondary photo"
                />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full justify-items-center'>
                <AboutMeBorderBox iconPath='/images/medal.svg' title='Experience' subTitle='6 Months Frontend internship' />
                <AboutMeBorderBox iconPath='/images/person.svg' title='Education' subTitle='Computer Science Student' />
            </div>
        </div>
    );
}

export default AboutMe;
