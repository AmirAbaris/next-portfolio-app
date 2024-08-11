'use client';

import { Button } from "@nextui-org/react";
import { type NavbarButtonProps } from "~/types/buttons";

const NavbarButton = ({ titleType, navigateFn, children }: NavbarButtonProps) => {
    return (
        <Button className="text-2xl" onClick={() => navigateFn(titleType)} variant="light">
            {children}
        </Button>
    )
}

export default NavbarButton;
