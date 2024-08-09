import Link from "next/link";
import ScrollButton from "./ScrollButton";

const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between p-16 font-poppins">
            <Link className="text-2xl" href={''}>Amir Zarei</Link>
            <ScrollButton />
        </div>
    );
}

export default Navbar;
