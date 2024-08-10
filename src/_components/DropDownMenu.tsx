'use client';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import React from 'react'
import { CiMenuBurger } from 'react-icons/ci';

type TitleType = 'about' | 'experience' | 'project' | 'contact';

const DropDownMenu = () => {
    const handleButtonClick = (key: TitleType) => {
        console.log(`You clicked on ${key}`);
        // Add navigation logic if needed, e.g., scroll to section or navigate to another page
    };

    return (
        <div className='cursor-pointer'>
            <Dropdown>
                <DropdownTrigger>
                    <div>
                        <CiMenuBurger />
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