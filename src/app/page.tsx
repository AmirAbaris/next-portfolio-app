import { Button } from '@nextui-org/react';
import Image from 'next/image';

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
        <div className='flex flex-col gap-y-2'>
          <div className='flex justify-center'>
            <Image className='rounded-full mb-8'
              src="/images/prof1.jpg"
              width={261}
              height={261}
              alt="amir photo"
            />
          </div>
          <h1 className='text-darkGrey font-semibold text-base'>HELLO, I&apos;M</h1>
          <h2 className='text-4xl font-extrabold'>Amir Zarei</h2>
          <h3 className='text-darkGrey font-semibold text-base'>Frontend Developer</h3>
          <div className='flex flex-wrap w-full justify-center gap-4'>
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
