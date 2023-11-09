"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      className="bg-appOrange rounded-lg mt-3 px-6 font-semibold"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
};
export default Logout;
