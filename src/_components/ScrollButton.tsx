import React from 'react'
import { CiMenuBurger } from 'react-icons/ci';

const ScrollButton = () => {
    return (
        <>
            <CiMenuBurger className='scale-150 block md:hidden' />
            <div className='hidden md:flex'>

            </div>
        </>
    )
}

export default ScrollButton;