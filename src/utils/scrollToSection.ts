'use client';

import { type TitleType } from "~/types/navigation";

const scrollToSection = (key: TitleType) => {
    const section = document.getElementById(key);
    if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY - 128;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

export default scrollToSection;