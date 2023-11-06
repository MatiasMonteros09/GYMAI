import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-appOrange mb-4 lg:flex lg:justify-between lg:items-center px-20 py-3 font-bold">
      
      <Link href="/"> Home</Link>
      
      <ul className="lg:flex gap-2" >
        <li>
          <Link href="/signup"> Sign Up</Link>
        </li>
        <li>
          <Link href="/authview">Sign In</Link>
        </li>
        <li>
          <Link href="/downloadview"> downloadview</Link>
        </li>
        <li>
          <Link href="/inputview"> inputview</Link>
        </li>
        <li>
          <Link href="/results"> Results</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
