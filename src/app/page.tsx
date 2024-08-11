import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <div className='flex flex-col w-full text-center'>
        {/* <Image className='rounded-full'
        src="/images/prof1.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}
        <div className='flex flex-col gap-y-1'>
          <h1 className='text-darkGrey font-semibold text-base'>HELLO, I&apos;M</h1>
          <h2 className='text-[3rem] font-extrabold'>Amir Zarei</h2>
          <h3 className='text-darkGrey font-semibold text-3xl'>Frontend Developer</h3>
        </div>

        <div className='flex flex-wrap w-full justify-center gap-4'>
          <Button radius="full" variant="bordered">
            Download CV
          </Button>
          <Button radius="full">
            Contact Info
          </Button>
        </div>

        <div className='flex justify-center gap-4'>
          <FaLinkedin />
          <FaGithub />

        </div>

      </div>

    </main>
  );
}
