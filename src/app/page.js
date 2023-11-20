import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";


const HomePage = () => {
  return (
    <section>
      <div className="content-center">
        <img src="https://www.palco23.com/thumb/MTIwMHg2NzV4MXgxLjAuMTEw/files/2020/19_redaccion/fitness/the+gym/the-gym-948.jpg"
          className="w-full h-auto"></img>
        <h1 className="text-center text-zinc-50 text-xl font-extrabold p-5">
          GYM <span className="text-appOrange text-xl font-extrabold">AI</span></h1>
      </div>
      <main className="bg-appOrange py-5">
        <h2 className="text-center text-black text-xl font-extrabold">WE CREATE YOUR PLAN</h2>
      </main>
      <aside className="flex justify-around p-5">
        <div className="flex text-blue-700 h-10 ml-5">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className="flex text-fuchsia-800 h-10 ml-5">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="flex text-lime-600 h-10 ml-5">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="flex text-gray-950 h-10 ml-5">
          <FontAwesomeIcon icon={faXTwitter} />
        </div>
      </aside>
      <div className="bg-appOrange p-5">
        <h3 className="text-center text-zinc-50 text-xl font-extrabold">
          CONTACT <span className="text-black text-xl font-extrabold">US</span>
        </h3>
      </div>
      <footer className="flex flex-col items-center text-xl font-extrabold p-5">
        <h3>LET'S TRAIN</h3>
        <h3 className="text-appOrange text-xl font-extrabold">TOGETHER</h3>
        <div className="py-5">
          <button className="rounded-lg bg-appOrange p-5 mx-3">
            <Link href="/signup">SIGN UP</Link>
          </button>
          <button className="rounded-lg bg-appOrange p-5 mx-3">
            <Link href="/authview">SIGN IN</Link>
          </button>
        </div>
      </footer>
    </section>
  );
};
export default HomePage;
