'use client';

import { Link } from '@nextui-org/react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import scrollToSection from '~/utils/scrollToSection';
import ImageWithLoader from './ImageWithLoader';

const ProfileOverview = () => {
    return (
        <div className='flex flex-col text-center lg:flex-row lg:gap-x-16 lg:items-center'>
            {/* Image Section */}
            <div className='flex justify-center lg:flex-shrink-0'>
                <ImageWithLoader
                    src="/images/prof1.jpg"
                    alt="Amir Zarei"
                    borderRadius='rounded-full'
                    isPriority
                />
            </div>

            {/* Text and Buttons Section */}
            <div className='flex flex-col gap-y-4 mt-8 lg:mt-0'>
                <h1 className='text-darkGrey font-extrabold text-base'>Hello, I&apos;m</h1>
                <h2 className='text-2xl font-extrabold md:text-4xl'>Amir Zarei</h2>
                <h3 className='text-darkGrey font-semibold text-lg md:text-2xl'>Frontend Developer</h3>
                <div className='flex flex-wrap justify-center gap-4 p-2'>
                    <a
                        href="https://utfs.io/f/a159ce10-e452-4fce-94b2-8a9fa83a6511-u325oc.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <PrimaryButton>Download CV</PrimaryButton>
                    </a>
                    <PrimaryButton onClick={() => scrollToSection('contact')} customColor='black'>
                        Contact Info
                    </PrimaryButton>
                </div>
                <div className='flex flex-wrap justify-center gap-4'>
                    <Link href="https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a/" target="_blank">
                        <Image
                            src="/images/linkedin.svg"
                            width={32}
                            height={32}
                            alt="LinkedIn logo"
                            className='cursor-pointer rounded-md'
                        />
                    </Link>
                    <Link href="https://github.com/AmirAbaris" target="_blank">
                        <Image
                            src="/images/github.svg"
                            width={32}
                            height={32}
                            alt="GitHub logo"
                            className='cursor-pointer'
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileOverview;