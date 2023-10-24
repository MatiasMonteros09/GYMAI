import Link from "next/link";

const ResultCard = ({ result }) => {
  console.log(result);
  const { date } = result;
  return (
    <div className="flex justify-around  hover:bg-orange-400 md:text-2xl">
        <p>
          {result.id}. {result.date}
        </p>
        <Link href="/01-09-2023.pdf" target="_blank" download="01-09-2023.pdf">
          Download
        </Link>
    </div>
  );
};

export default ResultCard;