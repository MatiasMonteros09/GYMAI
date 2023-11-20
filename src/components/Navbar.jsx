import Link from "next/link";
import { getServerSession } from "next-auth/next";

import { HamburgerNav } from "./HamburguerNav";
import Logout from "./Logout";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);


  return (
    <div className=" bg-appOrange">
      <div className="lg:hidden">
        <HamburgerNav />
      </div>
      <div>
        <nav className="hidden bg-appOrange lg:flex lg:justify-between lg:items-center px-20 py-3 font-bold">

          <Link href="/"> Home</Link>
          <ul className="lg:flex gap-5">
            {!session?.user ? (
              <>
                <li>
                  <Link href="/signup"> Sign Up</Link>
                </li>
                <li>
                  <Link href="/authview">Sign In</Link>
                </li>

              </>
            ) : (
              <>
                <li>
                  <Link href="/downloadview"> Download Plan</Link>
                </li>
                <li>
                  <Link href="/create"> Create Plan</Link>
                </li>
                <li>
                  <Link href="/results"> Results</Link>
                </li>
                <li>
                  <Logout />
                </li>
                {session.user.name}
              </>
            )}

          </ul>
        </nav>
      </div>
    </div>
  );

};
export default Navbar;