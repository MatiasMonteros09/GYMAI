"use client";
import ResultCard from "../../components/ResultCard";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { BsFiletypePdf } from "react-icons/bs";
import PdfResults from "@/components/PdfResults";

async function loadResults(session) {
  try {
    if (!session) {
      throw new Error("Session is undefined");
    }

    const { user } = session;
    if (!user || !user.id) {
      throw new Error("User or user ID is undefined");
    }

    const res = await fetch(`http://localhost:3000/api/routine/${user.id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch results");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error loading results:", error);
    return [];
  }
}
const ResultPage = () => {
  const { data: session } = useSession();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadResults(session);
      setResults(data);
    };

    fetchData();
  }, [session]);

  return (
    <main className="md:flex md:flex-col text-center my-4 md:my-10">
      <h1 className="text-5xl p-4 mb-6 text-center">
        Hi {session?.user?.name}
      </h1>
      <button onClick={() => getProfile()}>Reveal</button>
      <div className="bg-appOrange text-3xl md:mx-auto font-extrabold p-6">
        <h2 className="mb-4">Check your</h2>
        <h2 className="text-gray-900">History</h2>
      </div>

      <ul className="text-orange-600 py-20 text-bold">
        {results.map((result) => (
          <li className=" hover:bg-orange-400 md:text-2xl" key={result.id}>
            <ResultCard result={result} />
            <PDFDownloadLink document={<PdfResults result={result} />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button>Download</button>
            )
          }
        </PDFDownloadLink>
        <BsFiletypePdf style={{ fontSize: "40px" }} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ResultPage;
