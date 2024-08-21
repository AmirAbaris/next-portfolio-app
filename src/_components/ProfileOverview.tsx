'use client';

import { Link } from '@nextui-org/react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import scrollToSection from '~/utils/scrollToSection';
import ImageWithLoader from './ImageWithLoader';

const ProfileOverview = () => {
    return (
        <div className='flex flex-col text-center lg:flex-row lg:gap-x-16 lg:justify-center lg:items-center'>
            <div className='flex justify-center lg:w-auto'>
                <ImageWithLoader src="/images/prof1.jpg" alt="amirs main photo" borderRadius='rounded-full' isPriority />
            </div>
            <div className='flex flex-col gap-y-2 mt-8'>
                <h1 className='text-darkGrey font-extrabold text-base'>Hello, I&apos;m</h1>
                <h2 className='text-[2rem] font-extrabold md:text-[3rem]'>Amir Zarei</h2>
                <h3 className='text-darkGrey font-semibold text-[1.25rem] md:text-3xl'>Frontend Developer</h3>
                <div className='flex flex-wrap w-full justify-center gap-4 p-2'>
                    <a href="https://utfs.io/f/a159ce10-e452-4fce-94b2-8a9fa83a6511-u325oc.pdf" download target="_blank" rel="noopener noreferrer">
                        <PrimaryButton>Download CV</PrimaryButton>
                    </a>
                    <PrimaryButton onClick={() => scrollToSection('contact')} customColor='black'>Contact Info</PrimaryButton>
                </div>
                <div className='flex flex-wrap w-full justify-center gap-4'>
                    <Link href="https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a/" target="_blank">
                        <Image className='cursor-pointer rounded-md'
                            src="/images/linkedin.svg"
                            width={32}
                            height={32}
                            alt="linkedin logo"
                        />
                    </Link>
                    <Link href="https://github.com/AmirAbaris" target="_blank">
                        <Image className='cursor-pointer'
                            src="/images/github.svg"
                            width={32}
                            height={32}
                            alt="github logo"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileOverview;
