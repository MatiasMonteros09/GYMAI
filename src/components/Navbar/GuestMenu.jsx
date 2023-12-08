import Link from "next/link";

const GuestMenu = ({ setNavbar }) => (
  <>
    <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
      <Link href="/signup" onClick={() => setNavbar(false)}>
        Sign Up
      </Link>
    </li>
    <li className="pb-6 text-xl text-appOrange md:text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
      <Link href="/signin" onClick={() => setNavbar(false)}>
        Sign In
      </Link>
    </li>
  </>
);
export default GuestMenu;
