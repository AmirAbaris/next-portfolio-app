import Image from 'next/image';
import AboutMeBorderBox from './AboutMeBorderBox';

const AboutMe = () => {
    return (
        <div className='flex flex-col gap-8 items-center lg:flex-row'>
            <div className='w-3/5 mx-auto sm:w-4/5 lg:w-1/2'>
                <Image
                    className="rounded-3xl w-full h-auto object-cover aspect-square"
                    src="/images/prof2.jpg"
                    height={0}
                    width={0}
                    sizes='100vh'
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