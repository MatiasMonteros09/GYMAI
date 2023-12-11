import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header className=" fixed top-0  left-0 w-full p-2 mx-auto z-50 ">
          <section>
            <Navbar />
          </section>
      </header>
    </>
  );
};
export default Header;
