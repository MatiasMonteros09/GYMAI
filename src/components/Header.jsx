"use client"
import Navbar from "./Navbar";
import {RiMenuFill} from 'react-icons/ri'

const Header = () => {
  return (
   <>
     <header >
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
