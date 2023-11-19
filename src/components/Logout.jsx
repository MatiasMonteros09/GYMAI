"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut();

    router.push("/");
    router.refresh();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
