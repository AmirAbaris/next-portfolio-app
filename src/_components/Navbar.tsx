import NavbarButtonList from './NavbarButtonList';

import {Navbar, NavbarBrand, NavbarContent} from '@nextui-org/navbar';
import dynamic from 'next/dynamic';
const DropDownMenu = dynamic(() => import('./DropDownMenu'), {
  loading: () => null,
});

const NavbarItems = () => {
  return (
    <Navbar className='mb-12 lg:mb-56'>
      <NavbarBrand>
        <p className='font-bold text-2xl'>Amir Zarei</p>
      </NavbarBrand>
      <div className='hidden lg:flex'>
        <NavbarContent justify='center'>
          <NavbarButtonList />
        </NavbarContent>
      </div>
      <div className='flex lg:hidden'>
        <NavbarContent>
          <DropDownMenu />
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default NavbarItems;
