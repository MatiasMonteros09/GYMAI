"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export const HamburgerNav = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <HamburgerMenu textColor="text-white">
      <HamburgerMenuBrand href="#">
        <svg
          height="25"
          preserveAspectRatio="xMidYMid"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 153.6"
        >
          <path
            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
            fill="url(#a)"
          />
        </svg>
      </HamburgerMenuBrand>
      <HamburgerMenuToggler toggle={toggle} />
      <HamburgerMenuCollapse open={open}>
        <HamburgerMenuNav>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/">Home</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/inputview">Create Plan</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/results">Results</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/downloadview">
              Download Plan
            </HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/signup">Sign Up</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/authview">Sign In</HamburgerMenuLink>
          </HamburgerMenuItem>
        </HamburgerMenuNav>
      </HamburgerMenuCollapse>
    </HamburgerMenu>
  );
};

/* Logic */

const style = {
  nav: `block pl-0 mb-0`,
  collapse: `transition-height ease duration-300`,
  toggler: `float-right pt-1.5 text-3xl focus:outline-none focus:shadow mx-2`,
  link: `block cursor-pointer py-1.5 px-4  hover:text-gray-400 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
};

function HamburgerMenu({ children, bgColor, textColor }) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
  );
}


function HamburgerMenuBrand({ children, href }) {
  return (
    <Link href={href} className={style.brand}>
      <strong>{children}</strong>
    </Link>
  );
}

function HamburgerMenuToggler({ toggle }) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}

function HamburgerMenuCollapse({ children, open }) {
  const ref = useRef(null);

  const inlineStyle = open
    ? { height: ref.current?.scrollHeight }
    : { height: 0, visibility: "hidden", opacity: 0 };

  return (
    <div className={style.collapse} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
}

function HamburgerMenuNav({ children }) {
  return <ul className={style.nav}>{children}</ul>;
}

function HamburgerMenuItem({ children }) {
  return <li>{children}</li>;
}


function HamburgerMenuLink({ children, href }) {
  return (
    <Link href={href} className={style.link}>
      {children}
    </Link>
  );
}
