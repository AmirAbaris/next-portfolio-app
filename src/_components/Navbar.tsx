import Link from "next/link";
import NavbarButtonList from "./NavbarButtonList";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between p-16 font-poppins">
            <Link className="text-2xl" href={''}>Amir Zarei</Link>
            <div className="hidden lg:block">
                <NavbarButtonList />
            </div>
            <div className="block lg:hidden">
                <DropDownMenu />
            </div>
        </div>
    );
}

export default Navbar;
