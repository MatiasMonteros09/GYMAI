import Link from "next/link";

const ResultCard = ({ result }) => {
  const { date } = result;
  return (
    <Link
      href="/01-09-2023.pdf"
      target="_blank"
      download="01-09-2023.pdf"
      className="flex justify-around md:grid md:grid-cols-6 hover:bg-orange-400 md:text-2xl"
    >
      <p className="col-start-3 col-end-4">
        {result.id}. {date}
      </p>
      <p>Download</p>
    </Link>
    // </div>
  );
};

export default ResultCard;
