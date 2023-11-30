import { signOut } from "next-auth/react";

const Logout = () => {
  return <button className=" lg:bg-red-600 hover:bg-red-900 text-white px-4 py-2 md:rounded-xl" onClick={() => signOut()}>Logout</button>;
};
export default Logout;
