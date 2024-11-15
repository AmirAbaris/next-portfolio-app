import AboutMeBorderBox from './AboutMeBorderBox';
import ImageWithLoader from './ImageWithLoader';

const AboutMe = () => {
    return (
        <div className='flex flex-col gap-8 items-center lg:flex-row'>
            <div className='mx-auto w-4/5 md:w-2/3 lg:w-1/2'>
                <ImageWithLoader src="/images/prof2.jpg" alt="Amir's secondary photo" borderRadius='rounded-3xl' className='aspect-square' />
            </div>
            <div className='grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:px-0'>
                <AboutMeBorderBox iconPath='/images/medal.svg' title='Experience' subTitle='Full time frontend dev at Nilasoft' />
                <AboutMeBorderBox iconPath='/images/person.svg' title='Education' subTitle='Computer Science Student' />
                <p className='col-span-full'>
                    I kicked off my journey with a 6-month internship, diving deep into Angular magical world. After mastering components, services, and all those *ngIf/*ngFor goodies, Ive continued to grow my expertise in Angulars ecosystem. Now, Im on a mission to craft snappy, seamless user experiences and bring powerful enterprise applications to life using Angular robust framework.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;