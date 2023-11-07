import Link from "next/link";
import { HamburgerNav } from "./HamburguerNav";

const Navbar = () => {
  return (
    <div className=" bg-appOrange">
      <div className="lg:hidden">
        <HamburgerNav />
      </div>
      <div>
        <nav className="hidden bg-appOrange mb-4 lg:flex lg:justify-between lg:items-center px-20 py-3 font-bold">
          <Link href="/"> Home</Link>

          <ul className="lg:flex gap-5">
            <li>
              <Link href="/signup"> Sign Up</Link>
            </li>
            <li>
              <Link href="/authview">Sign In</Link>
            </li>
            <li>
              <Link href="/downloadview"> Download Plan</Link>
            </li>
            <li>
              <Link href="/inputview"> Create Plan</Link>
            </li>
            <li>
              <Link href="/results"> Results</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
