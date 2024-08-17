import Image from 'next/image';
import AboutMeBorderBox from './AboutMeBorderBox';

const AboutMe = () => {
    return (
        <div className='flex flex-col gap-8 items-center lg:flex-row'>
            <div className='w-[17rem] lg:w-[38rem] mx-auto'>
                <Image
                    className="rounded-3xl w-full h-auto object-cover aspect-square"
                    src="/images/prof2.jpg"
                    height={3024}
                    width={4032}
                    alt="Amir's secondary photo"
                />
            </div>
            <div className='grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:px-0'>
                <AboutMeBorderBox iconPath='/images/medal.svg' title='Experience' subTitle='6 Months Frontend Internship' />
                <AboutMeBorderBox iconPath='/images/person.svg' title='Education' subTitle='Computer Science Student' />
                <p className='col-span-full'>
                    I kicked off my journey with a 6-month internship, diving deep into Angulars magical world. After mastering components, services, and all those *ngIf/*ngFor goodies, I decided to spice things up by switching to React and Next.js. Now, Im on a mission to craft snappy, seamless user experiences and bring the latest web technologies to life.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;