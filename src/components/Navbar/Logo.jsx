import Link from "next/link";

const Logo = () => (
  <div>
    <div className="flex items-center justify-between py-3 md:py-5 md:block">
      <Link href="/">
        <h2 className="text-2xl text-cyan-800 font-bold ">LOGO</h2>
      </Link>
    </div>
  </div>
);

export default Logo;
