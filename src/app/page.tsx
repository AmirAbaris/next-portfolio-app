import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <div className='flex flex-col w-full text-center lg:flex-row lg:gap-x-12 lg:justify-center lg:items-center'>
        <div className='flex w-full justify-center mt-12 lg:w-auto'>
          <div className='w-[17rem] lg:w-[23rem]'>
            <Image
              className="rounded-full w-full h-auto"
              src="/images/prof1.jpg"
              height={0}
              width={0}
              sizes='100vw'
              alt="amir photo"
            />
          </div>
        </div>
        <div className='flex flex-col gap-y-2 mt-8'>
          <h1 className='text-darkGrey font-extrabold text-base'>Hello, I&apos;m</h1>
          <h2 className='text-[2rem] font-extrabold md:text-[3rem]'>Amir Zarei</h2>
          <h3 className='text-darkGrey font-semibold text-[1.25rem] md:text-3xl'>Frontend Developer</h3>
          <div className='flex flex-wrap w-full justify-center gap-4 p-2'>
            <Button className='font-semibold hover:bg-black hover:text-white' radius="full" variant="bordered">
              Download CV
            </Button>
            <Button className='bg-black text-white font-semibold' radius="full">
              Contact Info
            </Button>
          </div>
          <div className='flex flex-wrap w-full justify-center gap-4'>
            <Image
              src="/images/linkedin.png"
              width={32}
              height={32}
              alt="linkedin logo"
            />
            <Image
              src="/images/github.svg"
              width={32}
              height={32}
              alt="github logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
