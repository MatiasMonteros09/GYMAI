import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const CircularMenuButton = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bottom-8 right-8">
      <div
        className={`bg-blue-500 p-4 rounded-full cursor-pointer transition-all duration-300 ${
          isMenuOpen ? "transform rotate-45" : ""
        }`}
        onClick={toggleMenu}
      >
        <HiOutlineMenuAlt1 className="text-white text-3xl" />
      </div>

      {/* Botones del menú */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col space-y-2 absolute bottom-16 right-0 transition-all duration-300`}
      >
        <button className="bg-green-500 p-2 rounded-full text-white transform transition-transform duration-300 delay-100">
          Botón 1
        </button>
        <button className="bg-yellow-500 p-2 rounded-full text-white transform transition-transform duration-300 delay-200">
          Botón 2
        </button>
        <button className="bg-red-500 p-2 rounded-full text-white transform transition-transform duration-300 delay-300">
          Botón 3
        </button>
      </div>
    </div>
  );
};

export default CircularMenuButton;