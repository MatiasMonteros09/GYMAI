// UserMenu.js
import Link from "next/link";
import Logout from "@/components/Logout";

const UserMenu = ({ setNavbar }) => (
  <>
    <li className="pb-6 text-xl text-appOrange md:text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
      <Link href="/downloadview" onClick={() => setNavbar(false)}>
        Download Plan
      </Link>
    </li>
    <li className="pb-6 text-xl text-appOrange md:text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
      <Link href="/create" onClick={() => setNavbar(false)}>
        Create Plan
      </Link>
    </li>
    <li className="pb-6 text-xl text-appOrange md:text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
      <Link href="/results" onClick={() => setNavbar(false)}>
        Results
      </Link>
    </li>
    <li className="pb-6 text-xl py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-red-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
      <Logout />
    </li>
  </>
);

export default UserMenu;
