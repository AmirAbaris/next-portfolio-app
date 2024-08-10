'use client';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import React from 'react'
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { type TitleType } from '~/types/navigation';

const DropDownMenu = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleButtonClick = (key: TitleType) => {
        console.log(`You clicked on ${key}`);
    };

    return (
        <div className='cursor-pointer'>
            <Dropdown>
                <DropdownTrigger>
                    <div onClick={() => setOpen(!open)}>
                        {open
                            ? <IoMdClose />
                            : <CiMenuBurger />}
                    </div>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="about" onClick={() => handleButtonClick('about')}>
                        About
                    </DropdownItem>
                    <DropdownItem key="experience" onClick={() => handleButtonClick('experience')}>
                        Experience
                    </DropdownItem>
                    <DropdownItem key="project" onClick={() => handleButtonClick('project')}>
                        Project
                    </DropdownItem>
                    <DropdownItem key="contact" onClick={() => handleButtonClick('contact')}>
                        Contact
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default DropDownMenu;