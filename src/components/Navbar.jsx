"use client";
import { useState } from "react";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";

import { useSession } from "next-auth/react";
import Logout from "./Logout";

const Navbar = () => {
  const { data: session } = useSession();

  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black md:bg-appOrange  fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-800 font-bold ">LOGO</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoCloseCircle size={24} className="text-white" />
                  ) : (
                    <RiMenuFill size={24} className="text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              {!session?.user ?(
     <>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/signup" onClick={() => setNavbar(!navbar)} >
                    Sign Up
                  </Link>
                </li>
                <li className="pb-6 text-xl  text-appOrange md:text-white  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/signin" onClick={() => setNavbar(!navbar)}>
                    Sign In
                  </Link>
                </li>
                </>
                ) :(
                  <>
                <li className="pb-6 text-xl text-appOrange md:text-white  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/downloadview" onClick={() => setNavbar(!navbar)} >
                    Download Plan
                  </Link>
                </li>
                <li className="pb-6 text-xl  text-appOrange md:text-white  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/create" onClick={() => setNavbar(!navbar)}>
                    Create Plan
                  </Link>
                </li>
                <li className="pb-6 text-xl  text-appOrange md:text-white  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/results" onClick={() => setNavbar(!navbar)}>
                    Results
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-red-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Logout />
                </li>
                </>)}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  
};

export default Navbar;
