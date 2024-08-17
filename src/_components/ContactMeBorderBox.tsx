import Link from 'next/link';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';

const ContactMeBorderBox = () => {
    return (
        <div className='border border-mediumGrey rounded-3xl text-center p-6 flex flex-wrap gap-8 items-center justify-between w-fit'>
            {/* Email Section */}
            <div className="flex items-center space-x-4">
                <MdEmail className='w-8 h-8' />
                <a href="mailto:thisisamirabaris@gmail.com" className="text-sm font-medium text-black sm:text-base hover:underline hover:text-darkGrey transition-300">
                    thisisamirabaris@gmail.com
                </a>
            </div>

            {/* LinkedIn Section */}
            <div className="flex items-center space-x-4">
                <Image className='rounded-full'
                    src="/images/linkedin.svg"
                    width={32}
                    height={32}
                    alt="linkedin logo"
                />
                <Link href="https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a/" target='_blank' className="text-sm font-medium text-black sm:text-base hover:underline hover:text-darkGrey transition-300">
                    LinkedIn
                </Link>
            </div>
        </div>
    );
}

export default ContactMeBorderBox;