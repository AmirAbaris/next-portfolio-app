'use client';

import {Link} from '@nextui-org/react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import scrollToSection from '~/utils/scrollToSection';
import ImageWithLoader from './ImageWithLoader';

const ProfileOverview = () => {
  return (
    <div className='flex flex-col text-center lg:flex-row lg:items-center lg:gap-x-16'>
      {/* Image Section */}
      <div className='flex justify-center lg:flex-shrink-0'>
        <ImageWithLoader src='/images/prof1.jpg' alt='Amir Zarei' borderRadius='rounded-full' isPriority />
      </div>

      {/* Text and Buttons Section */}
      <div className='mt-8 flex flex-col gap-y-4 lg:mt-0'>
        <h1 className='text-base font-extrabold text-darkGrey'>Hello, I&apos;m</h1>
        <h2 className='text-2xl font-extrabold md:text-4xl'>Amir Zarei</h2>
        <h3 className='text-lg font-semibold text-darkGrey md:text-2xl'>Frontend Developer</h3>
        <div className='flex flex-wrap justify-center gap-4 p-2'>
          <a href='https://82v7dw62v0.ufs.sh/f/JziFObAbP51EAYwPoHi9WmKfBctpZdYoqnw476hxgaH8sGXu' download target='_blank' rel='noopener noreferrer'>
            <PrimaryButton>Download CV</PrimaryButton>
          </a>
          <PrimaryButton onClick={() => scrollToSection('contact')} customColor='black'>
            Contact Info
          </PrimaryButton>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link href='https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a/' target='_blank'>
            <Image src='/images/linkedin.svg' width={32} height={32} alt='LinkedIn logo' className='cursor-pointer rounded-md' />
          </Link>
          <Link href='https://github.com/AmirAbaris' target='_blank'>
            <Image src='/images/github.svg' width={32} height={32} alt='GitHub logo' className='cursor-pointer' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
