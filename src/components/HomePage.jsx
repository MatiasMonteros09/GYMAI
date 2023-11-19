import Link from 'next/link';
import { BsFiletypePdf } from 'react-icons/bs';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2">Welcome to GYM AI</h1>
        <p className="text-base md:text-lg mb-4">Your Personalized Workout Planning Tool</p>
      </div>

      <div className="mt-8 space-y-4 w-full">
        <Link href="/authview">
          <button className="bg-appOrange text-gray-50 text-xl font-semibold px-6 py-2 rounded-full w-full">
            Get Started
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default HomePage;