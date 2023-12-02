'use client'
import ResultCard from "../../components/ResultCard";
import Link from "next/link";

import {useSession} from "next-auth/react";




const ResultPage = () => {
  const {data:session} =  useSession();

  const results = [
    { id: 1, date: "01/07/2023" },
    { id: 2, date: "01/08/2023" },
    { id: 3, date: "01/09/2023" },
    { id: 4, date: "01/10/2023" },
  ];
  return (
    <main className="md:flex md:flex-col  text-center my-4 md:my-10">
      <h1 className="text-5xl p-4 mb-6 text-center">Hi {session?.user?.name}</h1>
      <button onClick={()=> getProfile()}>
        Reveal
      </button>
      <div className=" bg-appOrange text-3xl md:mx-auto font-extrabold p-6">
        <h2 className="mb-4">Check your</h2>
        <h2 className="text-gray-900 ">History</h2>
      </div>

      <ul className="text-orange-600 py-20 text-bold ">
        {results.map((result) => (
          <li key={result.id}>
            <ResultCard result={result} />
          </li>
        ))}
      </ul>      
    </main>
  );
};

export default ResultPage;
