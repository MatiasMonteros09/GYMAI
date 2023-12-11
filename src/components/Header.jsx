"use client"
import Navbar from "./Navbar";
import {RiMenuFill} from 'react-icons/ri'

const Header = () => {
  return (
   <>
     <header className="bg-appOrange fixed top-0 left-0 w-full p-2 mx-auto ">
        <div className="flex items-center justify-between ">
          {/* <section>Logo</section> */}
          <section ><Navbar/></section>
          {/* <section className="md:hidden">
            <button type="button">
            <RiMenuFill size={24}/>
            </button>
          </section> */}
        </div>
    </header>
   </>
  );
};
export default Header;
