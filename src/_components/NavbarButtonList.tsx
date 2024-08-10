'use client';

import { type TitleType } from '~/types/navigation';
import NavbarButton from './NavbarButton';

const NavbarButtonList = () => {
    const handleButtonClick = (key: TitleType) => {
        console.log(`You clicked on ${key}`);
    };

    return (
        <div className="flex space-x-2">
            <NavbarButton navigateFn={handleButtonClick} titleType="about">
                About
            </NavbarButton>
            <NavbarButton navigateFn={handleButtonClick} titleType="experience">
                Experience
            </NavbarButton>
            <NavbarButton navigateFn={handleButtonClick} titleType="project">
                Project
            </NavbarButton>
            <NavbarButton navigateFn={handleButtonClick} titleType="contact">
                Contact
            </NavbarButton>
        </div>
    );
}

export default NavbarButtonList;